"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GlowRXCarousels() {
  const blogPosts = [
    {
      id: 1,
      image: "/carousel/glowrx-2.jpg",
      title: "Radiance Boost Supplements",
      text: "Your daily glow, powered by science.",
    },
    {
      id: 2,
      image: "/images/hero-1.jpg",
      title: "HydraGlow Hair Moisturizer",
      text: "Deep hydration that lasts all day.",
    },
    {
      id: 3,
      image: "/carousel/glowrx-3.jpg",
      title: " Want Better Sleep?",
      text: "SleepRx: Your nightly glow ritual.",
    },
    {
      id: 4,
      image: "/carousel/glowrx-1.jpg",
      title: "Clay Repair Mask",
      text: "Wake up to radiant, refreshed skin.",
    },
    {
      id: 5,
      image: "/carousel/glowrx-4.jpg",
      title: "Hair Elixir",
      text: "Glow-enhancing antioxidants in every drop.",
    },
  ];

  const products = [
    { id: 1, name: "Inner Glow", category: "Skin Care" },
    { id: 2, name: "Skin Shield", category: "SPF Care" },
    { id: 3, name: "Glow Balm", category: "Moisturizers" },
    { id: 4, name: "Hair Elixir", category: "Hair Care" },
    { id: 5, name: "Radiant Me", category: "Supplements" },
  ];

  return (
    <section id="products" className="px-8 md:px-16 py-20">
      <h1 className="flex justify-center text-center font-bold text-3xl">
        Want to get a total
      </h1>
      <h1 className="flex justify-center text-center mt-2 text-[#B76E79] font-bold text-3xl">
        Glow?
      </h1>

      <div className="space-y-3 mt-20">
        {/* --- Top Carousel: Blog posts --- */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          loop
          speed={8000}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={20}
          className="w-full h-full"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} className="!w-[280px] sm:!w-[350px] md:!w-[420px]">
              <div
                className="h-[500px] bg-cover bg-center rounded-2xl flex flex-col justify-end text-white p-6"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <h2 className="text-3xl font-bold drop-shadow-md">{post.title}</h2>
                <p className="mt-2 text-lg drop-shadow-md">{post.text}</p>
                <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded-lg w-fit shadow-lg">
                  Explore
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Bottom Carousel: Products with gradient --- */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, reverseDirection: true, disableOnInteraction: false }}
          loop
          speed={10000}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={20}
          className="w-full h-[150px]"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} className="!w-[100px] sm:!w-[150px] md:!w-[200px]">
              <div className="h-full rounded-2xl p-6 flex flex-col justify-center items-center text-white font-semibold bg-gradient-to-r from-pink-600 to-purple-600 shadow-md">
                <h3 className="text-xl">{p.name}</h3>
                <p className="text-sm opacity-80">{p.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
