import React from "react";
import arrowLeftImg from "../images/icon-previous.svg";
import arrowRightImg from "../images/icon-next.svg";
import smallImg1 from "../images/image-product-1-thumbnail.jpg";
import smallImg2 from "../images/image-product-2-thumbnail.jpg";
import smallImg3 from "../images/image-product-3-thumbnail.jpg";
import smallImg4 from "../images/image-product-4-thumbnail.jpg";
import closImg from "../images/Combined Shape.svg";

export default function Activecontent({
  slides,
  slideIndex,
  slideHandleLeft,
  slideHandleRight,
  imageOneHandle,
  imageTwoHandle,
  imageThreeHandle,
  imageFourHandle,
  contentCloseHandle,
  content,
}) {
  return (
    <div
      className={
        content
          ? ` xl:flex hidden items-center justify-center flex-col 
     bg-black bg-opacity-75  absolute  w-[100%] h-[100%] top-0 left-[2%]`
          : "hidden"
      }
    >
      <div className=" relative">
        <img
          onClick={contentCloseHandle}
          className=" pb-[15px] ml-[525px] cursor-pointer"
          src={closImg}
          alt="closeimage"
        />
        <img
          className=" w-[550px] h-[550px] rounded-[15px]"
          src={slides[slideIndex].image}
          alt={slides.title}
        />
        <div
          onClick={slideHandleLeft}
          className=" flex justify-center items-center  w-[56px] h-[56px]
          bg-white rounded-[50%] absolute top-[46%] left-[-5.5%] cursor-pointer  "
        >
          <img src={arrowLeftImg} alt="arrowleft" />
        </div>

        <div
          onClick={slideHandleRight}
          className=" flex justify-center items-center  w-[56px] h-[56px]
       bg-white rounded-[50%] absolute top-[46%] left-[95%] cursor-pointer "
        >
          {" "}
          <img src={arrowRightImg} alt="arrowNext" />
        </div>
      </div>

      <div className=" hidden xl:flex flex-row w-[445px] mt-[32px] gap-[31px]">
        <img
          onClick={imageOneHandle}
          className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-[50%]"
          src={smallImg1}
          alt="productPicter"
        />
        <img
          onClick={imageTwoHandle}
          className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-[50%]"
          src={smallImg2}
          alt="productPicter"
        />
        <img
          onClick={imageThreeHandle}
          className=" w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-[50%]"
          src={smallImg3}
          alt="productPicter"
        />
        <img
          onClick={imageFourHandle}
          className=" w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-[50%]"
          src={smallImg4}
          alt="productPicter"
        />
      </div>
    </div>
  );
}
