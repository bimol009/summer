import React from "react";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import "./ImgContentPart.css";

const ImgContentPart = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Learn Page"}
        heading={"Learn Dance Part"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="image-part">
          <img
            src="https://i.ibb.co/xsBzzRs/dance-school-illustration-people-dancing-choreography-with-music-equipment-studio-2175-13830.jpg"
            alt=""
          />
        </div>

        <div className="content-part p-4">
          <p className="text-2xl text-center">We make you want to dance...right now!</p>
          <h3 className="text-3xl font-bold py-3 text-center">LEARN NUANCES FROM MASTERS</h3>
          <p>
            Canvas metri essar. Incubator ramen viral product management drect
            mailing. such founders gamification Effct. Branding funding
            incubator. Release user experience beta. Backing monetization
            paradigm shift client.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4 justify-items-center align-items-center">
            <div className="image-work justify-items-center align-items-center">
              <img
                src="https://i.ibb.co/QjGfzQZ/Untitled-design-3.png"
                alt=""
              />
              <div className="img-content">
                <h2 className="text-3xl font-bold mb-2">Dance Masters</h2>
                <p>
                  Canvas metri essar. Incubator ramen viral product management
                  drect mailing. such founders
                </p>
              </div>
            </div>
            <div className="image-work  justify-items-center align-items-center">
              <img
                src="https://i.ibb.co/qgNF1TC/Untitled-design-2.png"
                alt=""
              />
              <div className="img-content">
                <h2 className="text-3xl font-bold mb-2">Dance Masters</h2>
                <p>
                  Canvas metri essar. Incubator ramen viral product management
                  drect mailing. such founders
                </p>
              </div>
            </div>
            <div className="image-work  justify-items-center align-items-center">
              <img
                src="https://i.ibb.co/qMRt00q/Untitled-design-1.png"
                alt=""
              />
              <div className="img-content">
                <h2 className="text-3xl font-bold mb-2">Dance Masters</h2>
                <p>
                  Canvas metri essar. Incubator ramen viral product management
                  drect mailing. such founders
                </p>
              </div>
            </div>
            <div className="image-work  justify-items-center align-items-center">
              <img src="https://i.ibb.co/x2rGFp0/Untitled-design.png" alt="" />
              <div className="img-content">
                <h2 className="text-3xl font-bold mb-2">Dance Masters</h2>
                <p>
                  Canvas metri essar. Incubator ramen viral product management
                  drect mailing. such founders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgContentPart;
