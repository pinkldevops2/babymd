"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Blogfeatured from "public/images/blog_featured.png";
import SubHeading2 from "@/components/SubHeading2";
import SuperDocButton from "@/components/SuperDocButton";
import SuperDocBtnMD from "@/components/SuperDocBtnMD";
import DropDown from "@/components/DropDown";
import blog_list from "public/images/blog_list.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { calculateReadTime } from "@/components/calculateReadTime";

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Article interface matching your JSON
interface Article {
  id: number;
  title: string;
  description: string;
  category: Category;
  slug?: string;
  cover?: {
    url?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
  readTime?: number;
}

type ApiResponse = {
  data: Article[];
  meta: { pagination: { pageCount: number } };
};

const ArticlesGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
  const elements = gsap.utils.toArray<HTMLElement>(".fade-in");

  elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  
  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };

const fetchArticles = async (search = "") => {
  let baseUrl = "https://thoughtful-freedom-78af04f032.strapiapp.com/api/articles";
  let query = "";

  if (search) {
    query = [
      `filters[$or][0][title][$containsi]=${encodeURIComponent(search)}`,
      `filters[$or][1][description][$containsi]=${encodeURIComponent(search)}`
    ].join("&");
  }

  const fullUrl = `${baseUrl}?populate=cover&sort=publishedAt:desc&pagination[pageSize]=100${search ? `&${query}` : ""}`;

  try {
    const res = await fetch(fullUrl, {
      headers: {
        Authorization:
          "Bearer 8a159d391debafc3d5a8878af65c8359e1122f0ad3389864b8c2b68c342fcab92aa73ee8ea4265befa11c383a4e8ed703fb6596d724dabc688e2aeb3c520196d93215cca054a98e8c40245a0d0452a0bc636fc5c9a4a1ce9d35327172d7a53caa1effbe9edbcd0dece38c87a57a569aee5566e7858d3b1d61c1d23cd9f5cf331",
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch articles:", res.statusText);
      return;
    }

    const json: ApiResponse = await res.json();
    setArticles(json.data || []);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};


  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const to = setTimeout(() => {
      fetchArticles(searchTerm);
    }, 300);
    return () => clearTimeout(to);
  }, [searchTerm]);
// State holds the category slug directly (not an object)
const [selectedCategory, setSelectedCategory] = useState<string>("");
// Filtering by comparing slugs
const filteredArticles = selectedCategory
  ? articles.filter((article) => article.category?.slug === selectedCategory)
  : articles;

  return (
    
    <div className="bg-white p-4 container">
      {/* Featured Section */}
      <section className="fade-in">
        <div
          className="w-full h-64 md:h-120 bg-cover bg-center relative rounded-[15px]"
          style={{
            backgroundImage: `url(${Blogfeatured.src})`,
          }}
        >
          <div className="absolute inset-0 bg-opacity-25 rounded-[15px]" />
        </div>
        <div className="mx-auto py-4 pt-6 space-y-4 relative">
          <span className="inline-block bg-[#D9D9D9] text-[#5943A5] text-xs font-semibold uppercase tracking-wide px-6 py-2 rounded-full">
            Featured
          </span>
          <Image
          alt={'Hexago'}
          src={blog_list}
          height={29}
          width={28}
          className="absolute right-0 top-[25px]"
          />
          <div className="py-2 md:pb-0 md:mb-0">
          <SubHeading2
          mainText={<>Raising tiny humans?</>}
          highlightText={<></>}
          subText={<>Read on</>}
          />
          </div>
          <p className="text-gray-600 leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

     
<div className="flex flex-row justify-between items-center fade-in">

<h2 className="text-[28px] font-bold">Resources</h2>

<div className="searchbax">
   <button
        className="px-2"
        type="button"
        onClick={toggleDiv}
      >
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.44468 13.3144C5.58408 13.3144 4.00958 12.6698 2.72115 11.3807C1.43273 10.0916 0.788182 8.5171 0.787499 6.65718C0.786816 4.79727 1.43137 3.22276 2.72115 1.93366C4.01094 0.644552 5.58545 0 7.44468 0C9.30391 0 10.8788 0.644552 12.1692 1.93366C13.4597 3.22276 14.1039 4.79727 14.1019 6.65718C14.1019 7.40825 13.9824 8.11664 13.7434 8.78236C13.5044 9.44808 13.1801 10.037 12.7704 10.5491L18.5058 16.2845C18.6936 16.4723 18.7875 16.7112 18.7875 17.0014C18.7875 17.2916 18.6936 17.5306 18.5058 17.7183C18.3181 17.9061 18.0791 18 17.7889 18C17.4987 18 17.2598 17.9061 17.072 17.7183L11.3366 11.9829C10.8245 12.3926 10.2356 12.7169 9.56986 12.9559C8.90414 13.1949 8.19575 13.3144 7.44468 13.3144ZM7.44468 11.266C8.72491 11.266 9.81327 10.8181 10.7098 9.92228C11.6063 9.02646 12.0542 7.93809 12.0535 6.65718C12.0528 5.37627 11.6049 4.28825 10.7098 3.39312C9.81464 2.49798 8.72628 2.04973 7.44468 2.04836C6.16309 2.047 5.07507 2.49525 4.18061 3.39312C3.28616 4.29098 2.83791 5.379 2.83586 6.65718C2.83381 7.93536 3.28207 9.02373 4.18061 9.92228C5.07916 10.8208 6.16719 11.2687 7.44468 11.266Z" fill="black"/>
</svg>

      </button>
      <DropDown
  onChange={(slug) => setSelectedCategory(slug)}
  category={selectedCategory}
/>

</div>

</div>


       {/* Search Input */}
      {isVisible && (
      <div className="max-w-7xl mx-auto my-2">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>)}

      {/* Blog Posts List */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {filteredArticles.map((article) => {
            const { id, title, description, cover, category, readTime, slug } =
              article;

            const imgUrl =
              cover?.formats?.medium?.url ||
              cover?.formats?.small?.url ||
              cover?.url ||
              "https://via.placeholder.com/400x200";

              //console.log(description);
            const readTimes = calculateReadTime(description,10);
            return (
              <div
                key={id}
                className="border border-[#393939] rounded-[15px] overflow-hidden bg-white flex flex-col  fade-in"
               >
                <img
                  src={imgUrl}
                  alt={title}
                  className="w-full h-48 object-cover rounded-[15px]"
                />
                <div className="mt-4 w-fit mx-4 inline-flex items-center px-3 py-1 bg-gray-100 border border-[#393939] text-[10px] uppercase rounded-full">
                  <span>{category?.name || "General"}</span>
                  <span className="mx-2">|</span>
                  <span>{readTimes ?? 1} min read</span>
                </div>
                <div className="mt-4 mx-4 flex-1">
                  <h3 className="text-[20px] font-lato font-bold mb-2">{title}</h3>
                  <p className="leading-relaxed line-clamp-3">
                    {description}
                  </p>
                </div>
                <div className="mt-4 mb-4 mx-4">
                  <SuperDocBtnMD
                      href={`/resources/${slug}`}
                      target="_self"
                      label="LEARN MORE"
                      variant="pink"
                      className="w-[150px] center ml-0"
                      textColor="#FFFFFF"
                    />
                </div>
                
              </div>
            );
          })}          
        </div>
          <div className="w-full pt-8">
                <SuperDocButton
                href={''}
                target="_self"
                label={'LOAD MORE'}
                className={'w-[220px] justify-center mx-auto'}
                textColor={'white'}
                variant={'purple'}
                />
          </div>
      </section>
    </div>
  );
};

export default ArticlesGrid;