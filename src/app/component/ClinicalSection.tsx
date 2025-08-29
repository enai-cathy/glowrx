"use client";


import Link from "next/link";

export default function ClinicalSection() {
 
  return (
   <section
  className="relative py-4 px-6 md:px-12 rounded-2xl bg-[#D8CAB3]"
  
>

  {/* Content */}
  <div className="relative z-10">

   
      <div className="max-w-6xl mx-auto">
 <h2 className=" flex justify-center text-3xl text-center font-semibold mt-8">
   
      Prescribed by 
   
    </h2>
 <h2 className=" flex justify-center text-3xl text-center text-white font-semibold "> 
    licensed providers
    </h2>
 <p className="flex justify-center text-center mt-2 px-2 md:px-4 flex-grow">
      A daily beauty-from-within blend designed
      <br/>
      to support natural radiance and overall wellness.
      <br/>
      simple, clean, and effective.
    </p>
     {/* button */}
    <button className="flex mt-6 mx-auto text-center rounded-full px-5 py-2 text-white bg-black hover:bg-[#a987a9] shadow-md hover:shadow-lg hover:shadow-[#C8A2C8]/40 transition">
      Explore Products
    </button>

    <div className="relative w-full h-[700px] md:h-[800px] ">
        <img
          src="/images/doctor-2.png"
          alt="GlowRx Products"
          className="w-full h-full object-cover rounded-3xl object-contain [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/0 to-transparent rounded-3xl"></div>
       
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 — Inner Glow Daily */}
    <Link
            href="/products/inner-glow-daily"
            className="group relative rounded-2xl overflow-hidden h-full"
          >
  {/* soft gradient halo */}
  <div className="absolute -inset-[1px] rounded-3xl blur-[2px]" />

   


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
