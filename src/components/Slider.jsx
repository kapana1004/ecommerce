import React, { useState } from "react";
import Cartpopup from "./Cartpopup";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import arrowLeftImg from "../images/icon-previous.svg";
import arrowRightImg from "../images/icon-next.svg";

export default function Slider({ activeCart, item, setItem, price }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, image: img1, title: "prod1" },
    { id: 2, image: img2, title: "prod2" },
    { id: 3, image: img3, title: "prod3" },
    { id: 4, image: img4, title: "prod4" },
  ];

  const slideHandleRight = () => {
    setSlideIndex(slideIndex + 1);

    if (slideIndex >= slides.length - 1) {
      setSlideIndex(0);
    }
  };

  const slideHandleLeft = () => {
    setSlideIndex(slideIndex - 1);
    if (slideIndex <= 0) {
      setSlideIndex(slides.length - 1);
    }
  };

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
    <div className=" relative mb-[20px] ">
      <img
        className=" w-[375px] h-[300px]  "
        src={slides[slideIndex].image}
        alt={slides.title}
      />

      <div
        onClick={slideHandleLeft}
        className=" flex justify-center items-center  w-[40px] h-[40px]
       bg-white rounded-[50%] absolute top-[40%] left-[20px] cursor-pointer "
      >
        <img src={arrowLeftImg} alt="arrowleft" />
      </div>

      <div
        onClick={slideHandleRight}
        className=" flex justify-center items-center  w-[40px] h-[40px]
       bg-white rounded-[50%] absolute top-[40%] right-[20px] cursor-pointer "
      >
        {" "}
        <img src={arrowRightImg} alt="arrowNext" />
      </div>

      <Cartpopup
        activeCart={activeCart}
        item={item}
        setItem={setItem}
        price={price}
      />
    </div>
  );
}
