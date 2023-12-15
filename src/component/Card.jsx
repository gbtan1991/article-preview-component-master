import React, { useState } from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import shareBlk from "../assets/images/share-solid.svg";
import Share from './Share'

const Card = () => {
    const [ showShare, setShowShare ] =  useState(false)

    const toggleShare = () => {
        setShowShare(!showShare)
    }

  return (
    <section className="grid place-content-center h-screen shadow-lg">
      <div className="flex flex-col w-[330px] sm:flex-row sm:w-[730px] sm:h-[280px]">
        <div className="h-[220px] w-full bg-header-drawer bg-cover bg-top rounded-tr-xl rounded-tl-xl rounded-bt sm:h-full sm:w-full sm:bg-left-top sm:rounded-tr-none sm:rounded-bl-xl"></div>

        <div className="bg-white px-8 py-5 rounded-br-xl rounded-bl-xl sm:px-10 sm:py-6 sm:rounded-bl-none sm:rounded-tr-xl ">
          <h2 className="py-3 font-Manrope text-veryDarkGrayisBlue font-extrabold sm:text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-sm text-desaturatedDarkBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div>
            <div className="flex flex-row justify-between items-center pt-5">
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
              <button className="bg-lightGrayishBlue w-8 h-8 rounded-full flex items-center justify-center" onClick={toggleShare}>
                <img
                  src={shareBlk}
                  alt="Share icon"
                  className="opacity-75 self-center"
                />
              </button>
            </div>

            {showShare && <Share toggleShare={toggleShare} />}
            
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Card;
