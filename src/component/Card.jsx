import React, { useState, useEffect } from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import shareBlk from "../assets/images/share-solid.svg";
import Share from "./Share";
import { FaShare } from "react-icons/fa";

const Card = () => {
  const [showShare, setShowShare] = useState(false);
  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  return (
    <section className="grid place-content-center h-screen shadow-lg">
      <div className="flex flex-col w-[330px] sm:flex-row sm:w-[730px] sm:h-[320px]">
        <div className="h-[220px] w-full bg-header-drawer bg-cover bg-top rounded-tr-xl rounded-tl-xl rounded-bt sm:h-full sm:w-full sm:bg-left-top sm:rounded-tr-none sm:rounded-bl-xl"></div>

        <div
          className={`bg-white pt-10 pb-5 justify-between rounded-br-xl rounded-bl-xl sm:px-10 sm:py-6 sm:rounded-bl-none sm:rounded-tr-xl `}
        >
          <h2 className="py-3 px-8 font-Manrope text-veryDarkGrayisBlue font-extrabold sm:text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className={`text-sm text-desaturatedDarkBlue px-8 pb-4`}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className={`relative`}>
            <div className="flex flex-row justify-between px-8 items-center">
              <div className="flex flex-row items-center gap-3 ">
                <img
                  src={avatar}
                  alt="Michelle Appleton avatar"
                  className="w-10 rounded-full"
                />
                <div>
                  <h3 className="text-veryDarkGrayisBlue text-sm font-Manrope font-extrabold">
                    Michelle Appleton
                  </h3>
                  <p className="text-desaturatedDarkBlue text-sm ">
                    28 Jun 2020
                  </p>
                </div>
              </div>
              <button
                className={`bg-lightGrayishBlue w-8 h-8 rounded-full flex items-center justify-center sm:visible max-sm:z-10 max-sm:absolute top-[13px] right-5
                ${showShare && "md:bg-veryDarkGrayisBlue md:text-white"}`}
                onClick={toggleShare}
              >
                <FaShare color="" />
              </button>
            </div>
            {showShare && (
              <Share toggleShare={toggleShare} showShare={showShare} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
