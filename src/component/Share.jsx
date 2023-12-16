import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaPinterest,
  FaShare,
  FaTwitter,
} from "react-icons/fa";

const Share = ({ toggleShare, showShare }) => {
  const clipPathStyle = {
    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
  };

  return (
    <div className="absolute right-0 sm:-right-28 top-0 sm:-top-20 h-[60px] w-full  sm:h-[50px] sm:w-[280px]">
      <div className=" px-8 bg-veryDarkGrayisBlue flex items-center justify-between rounded-br-xl rounded-bl-xl sm:rounded-tr-xl sm:rounded-tl-xl w-full h-full sm:absolute sm:w-full">
        <div className="flex flex-row gap-5 items-center md:justify-between w-full">
          <p className="text-lightGrayishBlue font-extralight font-Manrope text-sm ">
            S H A R E
          </p>
          <div className="flex gap-5">
            <FaFacebookSquare
              color="#fff"
              size={20}
              className="cursor-pointer"
            />
            <FaTwitter color="#fff" size={20} className="cursor-pointer" />
            <FaPinterest color="#fff" size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
