import React from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

export default function Description({ item, setItem, priceHandle }) {
  // const [item, setItem] = useState(0);

  const countItemPlus = () => {
    setItem(item + 1);
  };

  const countItemMinus = () => {
    if (item > 0) {
      setItem(item - 1);
    }
  };
  return (
    <div className="">
      <span className=" text-[12px]  pl-[24px] text-[#FF7E1B] font-sans font-bold  ">
        SNEACKER COMPANY
      </span>
      <h1 className=" text-[28px] font-sans font-bold w-[327px] pl-[24px] leading-8 mt-[19px] ">
        {" "}
        Fall Limited Edition Sneakers{" "}
      </h1>

      <p className=" w-[327px] text-[15px] font-sans font-normal pl-[24px] mt-[15px] text-[#69707D]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className=" items-center ml-[24px] flex mt-[28px] ">
        <span className=" mr-[16px] w-[106px] font-bold text-[28px] ">
          {" "}
          $125.00
        </span>
        <span className=" mr-[90px] w-[51px] bg-[#FFEEE2] pl-[9px] text-[#FF7E1B] text-[16px] font-sans rounded-[6px]">
          50%
        </span>
        <span className=" line-through text-[#B6BCC8]">$250.00</span>
      </div>

      <div
        className=" ml-[24px] flex justify-between items-center pl-[24px] pr-[24px] 
          rounded-[10px] bg-[#F6F8FD] w-[327px] h-[56px] mt-[26px] mb-[16px]"
      >
        <img
          onClick={countItemMinus}
          className=" w-[12px] h-[3.3px] cursor-pointer"
          src={minus}
          alt="minus"
        />
        <span className=" text-[16px] text-[#1D2026] font-bold">{item}</span>
        <img
          onClick={countItemPlus}
          className=" w-[13px] h-[13px] cursor-pointer"
          src={plus}
          alt="plus"
        />
      </div>

      <div
        onClick={priceHandle}
        className=" mb-[88px] cursor-pointer flex bg-[#FF7E1B] w-[327px] ml-[24px] rounded-[10px] h-[56px] justify-center items-center "
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 
        0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 
        2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 
        0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 
        0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 
        0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#FFFFFF"
            fillRule="nonzero"
          />
        </svg>

        <span className=" ml-[15px] text-[16px] font-bold text-[#FFFFFF]">
          {" "}
          Add to cart
        </span>
      </div>
    </div>
  );
}
