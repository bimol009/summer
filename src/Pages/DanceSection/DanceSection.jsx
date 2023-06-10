
import SectionTitle from "../../Components/SectionTile/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DanceSection = () => {
  const bestDancers = [
    {
      id: 1,
      name: "Hip Hop",
      image:
        "https://i.ibb.co/y6VPDwN/maick-maciel-v8-C6-Blp-Bz-Y-unsplash.jpg",
    },
    {
      id: 2,
      name: "Velly",
      image: "https://i.ibb.co/p4QGJFb/ilja-tulit-Rdy1-Aqzqc-MU-unsplash.jpg",
    },
    {
      id: 3,
      name: "Break",
      image: "https://i.ibb.co/W2VZXVz/breakreate-A-If-Og-YEQU4-unsplash.jpg",
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <SectionTitle subHeading={"Loud Dancers"} heading="Best Dancers" />
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Dance Academy!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bestDancers.map((bt) => (
          <div
            key={bt.id}
            data-aos="fade-right"
            className="bg-white rounded-lg shadow-lg"
          >
            <img
              src={bt.image}
              alt={bt.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{bt.name}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DanceSection;
