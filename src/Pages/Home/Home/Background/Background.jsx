import React from "react";
import SectionTitle from "../../../../Components/SectionTile/SectionTitle";

import "./Background.css";

const Background = () => {
  return (
    <section>
      <SectionTitle heading={"Dance Step"}></SectionTitle>
      <div className="bg-black bg text-white py-20 bg-fixed">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-12 md:my-24">
          <div className=" w-full justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              TechFest
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : Dance Step
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
      
            <div className=" content-center">
              <div>
                <img
                
                  src="https://i.ibb.co/PtFQVq2/Blue-Orange-New-casual-style-collection-Instagram-Post-removebg-preview.png"
                />
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Background;
