import React from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import shareBlk from "../assets/images/share-solid.svg"

const Card = () => {
  return (
    <section className="grid place-content-center h-screen">
      <div className="flex flex-col w-[320px]">
        <div className="h-[210px] bg-header-drawer bg-cover bg-top rounded-tr-xl rounded-tl-xl"> 
        </div>

        <div className="bg-white p-7">
          <h2 className="py-3 font-Manrope text-veryDarkGrayisBlue font-black">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-sm text-veryDarkGrayisBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div>
            <div className="flex flex-row ">
                <img src={avatar} alt="Michelle Appleton avatar" className="w-12 rounded-full"/>
                <div>
                    <h3>Michelle Appleton</h3>
                    <p>28 Jun 2020</p>
                </div>
                <button>
                <img src={shareBlk} alt="Share icon" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
