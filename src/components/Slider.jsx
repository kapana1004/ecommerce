import React, { useState } from "react";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, image: "./images/image-product-1-thumbnail.jpg", title: "prod1" },
    { id: 2, image: "./images/image-product-2-thumbnail.jpg", title: "prod2" },
    { id: 3, image: "./images/image-product-3-thumbnail.jpg", title: "prod3" },
    { id: 4, image: "./images/image-product-4-thumbnail.jpg", title: "prod4" },
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
        <img src="./images/icon-previous.svg" alt="arrowleft" />
      </div>

      <div
        onClick={slideHandleRight}
        className=" flex justify-center items-center  w-[40px] h-[40px]
       bg-white rounded-[50%] absolute top-[40%] right-[20px] cursor-pointer "
      >
        {" "}
        <img src="./images/icon-next.svg" alt="arrowNext" />
      </div>
    </div>
  );
}
