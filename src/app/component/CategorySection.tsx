"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowRightCircleIcon} from "lucide-react";

const categories = [
  {
    title: "Better Sleep",
    highlight: "Sleep",
    gradient: "from-pink-300 to-purple-400",
    image: "/images/sleep-product.png",
    link: "#products",
  },
  {
    title: "Clear Skin",
    highlight: "Skin",
    gradient: "from-pink-300 to-rose-400",
    image: "/images/clear-skin2.png",
    link: "#products",
  },
  {
    title: "Inner Glow",
    highlight: "Glow",
    gradient: "from-amber-300 to-orange-400",
    image: "/images/glow-1.png",
    link: "#products",
  },
  {
    title: "Calm Mind",
    highlight: "Mind",
    gradient: "from-teal-300 to-emerald-400",
    image: "/images/calm-mind.png",
    link: "#products",
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full py-6 overflox-x-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.link}
            className="group bg-[#FCE9EC] relative flex  rounded-2xl overflow-hidden p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            <div className="relative z-10 flex flex-row whitespace-nowrap items-center ">
             

              {/* Title with highlighted word */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                {cat.title.split(" ").map((word, i) =>
                  word === cat.highlight ? (
                    <span
                      key={i}
                      className="group-hover:text-white text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
                    >
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h3>
               <Image
                src={cat.image}
                alt={cat.title}
                width={60}
                height={40}
                className=""
                priority
              />
              <ArrowRightCircleIcon className="ml-2 h-5 w-5 text-gray-900 group-hover:text-white transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
