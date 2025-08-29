
import Image from "next/image";
import Hero from "./component/Hero";
import InnerGlowCards from "./component/InnerGlowCards";
import ClinicalHeaderSection from "./component/ClinicalHeaderSection";
import ClinicalSection from "./component/ClinicalSection";
import FAQAccordion from "./component/Faqs";
import NewsletterForm from "./component/Newsletter";
import Footer from "./component/Footer";
import Carousel from "./component/Carousel";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
       {/* Hero Section */}
       
<Hero/>
     <InnerGlowCards/>
     <ClinicalHeaderSection/>
     <ClinicalSection />
      
     
      {/* <section id="shop" className="px-8 md:px-16 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Explore More Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "CalmRx", desc: "Beat stress before it beats you.", img: "/images/calmrx.png" },
            { name: "SleepRx", desc: "Wake up refreshed, not groggy.", img: "/images/sleeprx.png" },
            { name: "ImmuneRx", desc: "Your daily shield against colds.", img: "/images/immunerx.png" },
            { name: "SkinRx", desc: "Glow starts from within.", img: "/images/skinrx.png" },
          ].map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <Image
                src={p.img}
                alt={p.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section> */}

     <Carousel/>
<FAQAccordion/>
<NewsletterForm/>

      {/* Footer */}
      
      <Footer/>
    </main>
  );
}
