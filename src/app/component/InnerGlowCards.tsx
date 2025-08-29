"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CheckCircle2Icon } from "lucide-react";
import "swiper/css";

export default function InnerGlowCards() {
  const offers = [
    { key: 1, text: "Free Shipping on orders over $50" },
    { key: 2, text: "20% off your first order" }, 
    { key: 3, text: "Subscribe & Save 15%" },
   { key: 4, text: "Refer a Friend, Get $10" },]

  return (
   <section
  className="relative py-4 px-6 md:px-12 rounded-2xl bg-cover bg-center"
  style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
>
  {/* Overlay */}
 <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#B76E79]/90 via-[#B76E79]/80 to-[#B76E79]/60"></div>

  {/* Content */}
  <div className="relative z-10">

   
      <div className="max-w-6xl mx-auto">
 <h3 className=" flex justify-center text-2xl text-center text-gray-100 font-semibold mt-8">
      Get Access to a range of<br/> Clincally formulated <br/> Products
    </h3>
<Swiper
  modules={[Autoplay]}
  direction="vertical"
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  slidesPerView={1}
  className="w-full max-w-lg h-[50px] mb-4"
>
  {offers.map((offer) => (
    <SwiperSlide key={offer.key}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white flex items-center gap-2 justify-center px-4 py-4 rounded-full text-sm font-medium text-center"
      >
        <CheckCircle2Icon/>{offer.text} 
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

        <div className="relative w-full h-[400px] md:h-[500px] ">
        <img
          src="/images/hero-glowrx.png"
          alt="GlowRx Products"
          className="w-full h-full object-cover rounded-3xl object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-transparent rounded-3xl"></div>
       
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 — Inner Glow Daily */}
    <Link
            href="#products"
            className="group relative rounded-2xl overflow-hidden h-full"
          >
  {/* soft gradient halo */}
  <div className="absolute -inset-[1px] rounded-3xl bg-[#B76E79]/20 blur-[2px]" />

  {/* glass panel */}
  <div className="relative rounded-3xl bg-white/20 backdrop-blur-xl py-20 border border-white/10 p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full">
    
    {/* heading */}
    <h3 className="text-2xl text-gray-50 font-semibold mb-4">
      Inner Glow 
    </h3>

    {/* product image */}
  <div className="w-32 h-32 rounded-2xl flex items-center justify-center overflow-hidden mb-4">
  <Image
    src="/images/inner-glow-daily.png"
    alt="Inner Glow Daily"
    width={112}
    height={112}
    className="object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
  />
</div>

 <h3 className="text-2xl font-semibold mb-4">
      <span className="text-[#6B5B95]">Daily</span>
    </h3>
    {/* content */}
    <p className="mt-2 px-2 md:px-4 text-[#FCE9EC] flex-grow">
      A daily beauty-from-within blend designed
      <br/>
      to support natural radiance and overall wellness.
      <br/>
      simple, clean, and effective.
    </p>

    {/* tags */}
    <div className="mt-4 flex flex-wrap items-center justify-center gap-3 p-2">
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/40 border border-white/50">
        Collagen
      </span>
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/40 border border-white/50">
        Biotin
      </span>
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/40 border border-white/50">
        Antioxidants
      </span>
    </div>

    {/* button */}
    <button className="mt-6 rounded-full px-5 py-2 text-white bg-black hover:bg-[#a987a9] shadow-md hover:shadow-lg hover:shadow-[#C8A2C8]/40 transition">
      Shop Glow Daily
    </button>
  </div>
</Link>


          {/* Card 2 — Inner Glow Serum */}
         <Link
  href="#products"
  className="group relative rounded-2xl overflow-hidden h-full"
>
  {/* soft gradient halo (cooler tint) */}
  <div className="absolute -inset-[1px] rounded-3xl bg-[#B76E79]/20 blur-[2px]" />

  {/* glass panel */}
  <div className="relative rounded-3xl bg-white/20 backdrop-blur-xl py-20 border border-white/10 p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full">
    
    {/* heading */}
    <h3 className="text-2xl text-gray-50 font-semibold mb-4">
      Inner Glow 
    </h3>

    {/* product image */}
    <div className="w-32 h-32 rounded-2xl flex items-center justify-center overflow-hidden mb-4">
      <Image
        src="/images/inner-glow-serum.png"
        alt="Inner Glow Serum"
        width={112}
        height={112}
      className="object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      />
    </div>
 <h3 className="text-2xl font-semibold mb-4">
      <span className="text-[#7D6FA3]">Serum</span>
    </h3>
    {/* content */}
    <p className="mt-2 px-2 md:px-4 text-[#FCE9EC] flex-grow">
      A clean, lightweight brightening serum 
      <br/>
      featuring vitamin C + niacinamide to even tone and boost a soft, dewy finish.
      <br/>
      perfect partner to Inner Glow Daily.
    </p>

    {/* tags */}
    <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/40 border border-white/50">
        Vitamin C
      </span>
      <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/40 border border-white/50">
        Niacinamide
      </span>
    </div>

    {/* button */}
    <button className="mt-6 rounded-full px-5 py-2 text-white bg-black hover:bg-[#5e5186] shadow-md hover:shadow-lg hover:shadow-[#6B5B95]/40 transition">
      Shop Glow Serum
    </button>
  </div>
</Link>

        </div>
        <p className="text-xs text-white/30 m-6 leading-relaxed text-center">
  *These statements have not been evaluated by the Food and Drug Administration. 
  This product is not intended to diagnose, treat, cure, or prevent any disease. 
  Results may vary from person to person. Always consult your healthcare provider 
  before starting any new supplement.
</p>

      </div>
      </div>
    </section>
  );
}
