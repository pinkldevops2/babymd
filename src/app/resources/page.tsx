"use client";

import React, { useEffect, useState } from "react";

interface ImageFormat {
  url: string;
}

interface CoverAttributes {
  url: string;
  formats?: {
    medium?: ImageFormat;
  };
}

interface CoverData {
  attributes: CoverAttributes;
}

interface ArticleAttributes {
  title: string;
  description: string;
  cover?: {
    data?: CoverData;
  };
}

interface Article {
  id: number;
  attributes: ArticleAttributes;
}

interface ApiResponse {
  data: Article[];
  meta: {
    pagination: {
      pageCount: number;
    };
  };
}

const ArticlesGrid: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const pageSize = 6;

  const fetchArticles = async (pageNumber: number, search = "") => {
    try {
      const query = new URLSearchParams({
        "pagination[page]": pageNumber.toString(),
        "pagination[pageSize]": pageSize.toString(),
        populate: "cover",
        sort: "publishedAt:desc",
      });

      if (search) {
        query.append("filters[$or][0][title][$containsi]", search);
        query.append("filters[$or][1][description][$containsi]", search);
      }

      const res = await fetch(
        `http://localhost:1337/api/articles?${query.toString()}`
      );
      const data: ApiResponse = await res.json();

      if (!data?.data) return;

      if (pageNumber === 1) {
        setArticles(data.data);
      } else {
        setArticles((prev) => [...prev, ...data.data]);
      }

      const { pageCount } = data.meta.pagination;
      setHasMore(pageNumber < pageCount);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setIsSearching(!!searchTerm);
      fetchArticles(1, searchTerm);
      setPage(1);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const loadMore = () => {
    const nextPage = page + 1;
    fetchArticles(nextPage, searchTerm);
    setPage(nextPage);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md w-full md:w-1/2"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          const attrs = article.attributes;
          if (!attrs) return null;

          const imageUrl =
            attrs.cover?.data?.attributes?.formats?.medium?.url ||
            attrs.cover?.data?.attributes?.url;
          const imageSrc = imageUrl
            ? `http://localhost:1337${imageUrl}`
            : null;

          return (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow border p-3 space-y-3"
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={attrs.title || "Cover image"}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}

              <div className="flex gap-2 text-xs text-gray-500">
                <span>BLOG</span>
                <span>|</span>
                <span>5 MINS READ</span>
              </div>

              <h4 className="font-semibold text-gray-900">
                {attrs.title || "Untitled"}
              </h4>
              <p className="text-sm text-gray-600">
                {attrs.description || "No description available."}
              </p>

              <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
                EXPLORE MORE <span>▶</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* View More */}
      {hasMore && (
        <div className="flex justify-center pt-6">
          <button
            className="bg-[#5d3fd3] text-white text-sm px-6 py-2 rounded-full flex items-center gap-2"
            onClick={loadMore}
          >
            VIEW MORE <span>▶</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticlesGrid;