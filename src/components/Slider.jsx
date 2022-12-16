import React from "react";
import Cartpopup from "./Cartpopup";

import arrowLeftImg from "../images/icon-previous.svg";
import arrowRightImg from "../images/icon-next.svg";
import smallImg1 from "../images/image-product-1-thumbnail.jpg";
import smallImg2 from "../images/image-product-2-thumbnail.jpg";
import smallImg3 from "../images/image-product-3-thumbnail.jpg";
import smallImg4 from "../images/image-product-4-thumbnail.jpg";

export default function Slider({
  activeCart,
  item,
  setItem,
  price,
  itemCount,
  total,
  activeContext,
  setActiveContext,
  slides,
  slideIndex,
  slideHandleLeft,
  slideHandleRight,
  imageOneHandle,
  imageTwoHandle,
  imageThreeHandle,
  imageFourHandle,
  contentCloseHandle,
}) {
  // const [slideIndex, setSlideIndex] = useState(0);

  // const slides = [
  //   { id: 1, image: img1, title: "prod1" },
  //   { id: 2, image: img2, title: "prod2" },
  //   { id: 3, image: img3, title: "prod3" },
  //   { id: 4, image: img4, title: "prod4" },
  // ];

  // const slideHandleRight = () => {
  //   setSlideIndex(slideIndex + 1);

  //   if (slideIndex >= slides.length - 1) {
  //     setSlideIndex(0);
  //   }
  // };

  // const slideHandleLeft = () => {
  //   setSlideIndex(slideIndex - 1);
  //   if (slideIndex <= 0) {
  //     setSlideIndex(slides.length - 1);
  //   }
  // };

  // const imageOneHandle = () => {
  //   setSlideIndex(0);
  // };
  // const imageTwoHandle = () => {
  //   setSlideIndex(1);
  // };
  // const imageThreeHandle = () => {
  //   setSlideIndex(2);
  // };
  // const imageFourHandle = () => {
  //   setSlideIndex(3);
  // };

  return (
    // <div className="  flex justify-center ">
    //   {slides.map((item) => {
    //     const { id, image, title } = item;
    //     return (
    //       <div className=" flex justify-center" key={id}>
    //         <img src={image} alt={title} />
    //       </div>

    //     );
    //   })}
    // </div>
    <div className=" relative mb-[20px] xl:mt-[70px] xl:cursor-pointer  ">
      <img
        onClick={contentCloseHandle}
        className=" w-[375px] h-[300px] xl:w-[445px] xl:h-[445px] xl:rounded-[15px]"
        src={slides[slideIndex].image}
        alt={slides.title}
      />

      <div
        onClick={slideHandleLeft}
        className=" flex justify-center items-center  w-[40px] h-[40px]
       bg-white rounded-[50%] absolute top-[40%] left-[20px] cursor-pointer xl:hidden "
      >
        <img src={arrowLeftImg} alt="arrowleft" />
      </div>

      <div
        onClick={slideHandleRight}
        className=" flex justify-center items-center  w-[40px] h-[40px]
       bg-white rounded-[50%] absolute top-[40%] right-[20px] cursor-pointer xl:hidden"
      >
        {" "}
        <img src={arrowRightImg} alt="arrowNext" />
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

      <Cartpopup
        activeCart={activeCart}
        item={item}
        setItem={setItem}
        price={price}
        itemCount={itemCount}
        total={total}
        activeContext={activeContext}
        setActiveContext={setActiveContext}
      />
    </div>
  );
}
