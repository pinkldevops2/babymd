"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Blogpage from "public/images/blog_page.svg";
import SubHeading2 from "@/components/SubHeading2";
import SubHeading3 from "@/components/SubHeading3";
import SuperDocBtnMD from "@/components/SuperDocBtnMD";

interface Article {
  id: number;
  title: string;
  description?: string;
  slug?: string;
  cover?: {
    url?: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
  category?: string;
  readTime?: number;
}

const ArticleDetail: React.FC = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3.25,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setSliderLoaded(true);
    },
  });

  // Fetch article by slug
  const fetchArticleBySlug = async (slug: string) => {
    const res = await fetch(
      `https://thoughtful-freedom-78af04f032.strapiapp.com/api/articles?filters[slug][$eq]=${slug}&populate=cover`,
      {
        headers: {
          Authorization:
            "Bearer 8a159d391debafc3d5a8878af65c8359e1122f0ad3389864b8c2b68c342fcab92aa73ee8ea4265befa11c383a4e8ed703fb6596d724dabc688e2aeb3c520196d93215cca054a98e8c40245a0d0452a0bc636fc5c9a4a1ce9d35327172d7a53caa1effbe9edbcd0dece38c87a57a569aee5566e7858d3b1d61c1d23cd9f5cf331",
        },
      }
    );
    const json = await res.json();
    setArticle(json?.data?.[0] || null);
  };

  // Fetch all related articles
  const fetchRelatedArticles = async () => {
    const res = await fetch(
      `https://thoughtful-freedom-78af04f032.strapiapp.com/api/articles?sort=publishedAt:desc&pagination[pageSize]=100&populate=cover`,
      {
        headers: {
          Authorization:
            "Bearer 8a159d391debafc3d5a8878af65c8359e1122f0ad3389864b8c2b68c342fcab92aa73ee8ea4265befa11c383a4e8ed703fb6596d724dabc688e2aeb3c520196d93215cca054a98e8c40245a0d0452a0bc636fc5c9a4a1ce9d35327172d7a53caa1effbe9edbcd0dece38c87a57a569aee5566e7858d3b1d61c1d23cd9f5cf331",
        },
      }
    );
    const json = await res.json();
    const allArticles = json?.data || [];
    const filtered = allArticles.filter((item: Article) => item.slug !== slug);
    setRelated(filtered);
  };

  useEffect(() => {
    if (slug) {
      fetchArticleBySlug(slug as string);
      fetchRelatedArticles();
    }
  }, [slug]);

  if (!article) return <p className="p-10 text-center">Loading article...</p>;

  const imageUrl =
    article.cover?.formats?.medium?.url ||
    article.cover?.formats?.small?.url ||
    article.cover?.url ||
    "https://via.placeholder.com/800x400";

  return (
    <div className="bg-white w-full container p7-6">
      {/* Article Content */}
      <section className="px-4 pt-6">
      <div className="relative">
        <SubHeading2
          mainText={article.title}
          highlightText={<><br/></>}
          subText={<>Read on</>}
        />
        <Image
          alt="Hexagon"
          src={Blogpage}
          width={32}
          height={40}
          className="absolute right-0 top-[40px]"
        />
      </div>

      <div
        className="w-full h-64 md:h-120 bg-cover bg-center my-6 rounded-[15px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
        {article.description || "No description available."}
      </p>
</section>
      {/* Related Posts Slider */}
      {related.length > 0 && (
        <>
        <div className="mb-4 px-4">
          <SubHeading3
            mainText={'View More '}
            highlightText={<></>}
            subText={<>Resources</>}
          />
        </div>
          <div ref={sliderRef} className="keen-slider pl-4">
            {related.map((item) => {
              const coverImg =
                item.cover?.formats?.medium?.url ||
                item.cover?.formats?.small?.url ||
                item.cover?.url ||
                "https://via.placeholder.com/400x200";

              return (
                <div
                  key={item.id}
                  className="keen-slider__slide flex flex-col rounded-[15px] border border-[#393939] bg-white overflow-hidden"
                >
                  <img
                    src={coverImg}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-[13px]"
                  />
                  <div className="mt-4 mx-4 flex-1">
                    <h3 className="text-[20px] font-bold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 mb-4 mx-4">
                    <SuperDocBtnMD
                      href={`/resources/${item.slug}`}
                      target="_self"
                      label="EXPLORE MORE"
                      variant="pink"
                      className="w-[170px]"
                      textColor="#FFFFFF"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          {sliderLoaded && instanceRef.current?.track?.details && (
            <div className="flex justify-center mt-8 pb-10 space-x-2">
              {Array.from(
                { length: instanceRef.current.track.details.slides.length },
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-[#5943A5]" : "bg-[#DDD0FF]"
                    }`}
                  />
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleDetail;