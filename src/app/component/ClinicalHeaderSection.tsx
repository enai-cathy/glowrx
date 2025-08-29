"use client";


export default function ClinicalHeaderSection() {

  return (
    <section className="flex flex-col items-center text-center px-6 md:px-16 py-18 bg-white">
      {/* Headline + rotating phrase */}
      <div className="mb-4">
       
          <h1 className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Doctor-trusted Solutions,
            <br/>
            <span className="text-[#D2A679]">personalized to you.</span> 
          </h1>
       
    
      </div>

      {/* Subheading */}
      <p className="max-w-2xl text-lg text-gray-700 mb-8">
        Clean, clinically formulated supplements and beauty products designed for everyday confidence.
      </p>

    </section>
  );
}
