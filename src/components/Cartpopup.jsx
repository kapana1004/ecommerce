import React from "react";
import { useState } from "react";
import productImg from "../images/image-product-1-thumbnail.jpg";
import deleteImg from "../images/icon-delete.svg";

export default function Cartpopup({ activeCart, item, setItem, total }) {
  const [activeContext, setActiveContex] = useState(true);

  const deleteContextHandle = () => {
    setActiveContex(!activeContext);
    setItem(0);
  };

  return (
    <div
      className={
        activeCart
          ? ` flex flex-col w-[360px] bg-white rounded-[10px] 
        absolute top-[3%] left-[2%]`
          : `hidden`
      }
    >
      <h3 className=" text-[16px] font-bold font-sans mt-[24px] ml-[24px] mb-[27px] ">
        {" "}
        Cart
      </h3>
      <hr className=" mb-[24px]"></hr>
      <div
        className={
          activeContext && item > 0
            ? `flex flex-row justify-around  items-center`
            : `hidden`
        }
      >
        <img className=" w-[50px] h-[50px]" src={productImg} alt="shoephoto" />
        <div className=" flex flex-col">
          <span className=" text-[16px] font-sans text-[#69707D] font-normal">
            Fall Limited Edition Sneakers
          </span>

          <div className="flex">
            <span className="text-[16px] font-sans text-[#69707D] font-norma">
              $125.00 x {item}
            </span>
            <span className=" text-[16px] font-sans text-[#1D2026] font-bold  pl-[5px]">
              ${total}.00
            </span>
          </div>
        </div>
        <img
          onClick={deleteContextHandle}
          className=" w-[14px] h-[16px] cursor-pointer"
          src={deleteImg}
          alt="deleteImage"
        />
      </div>
      <button
        className={
          activeContext && item > 0
            ? ` w-[312px] h-[56px] bg-[#FF7E1B] mt-[24px] ml-[24px] mb-[32px] rounded-[10px] 
      text-[16px] font-sans font-bold text-[#FFFFFF]`
            : ` hidden`
        }
      >
        Checkout
      </button>

      <span
        className={
          activeContext && item > 0
            ? ` hidden `
            : ` pt-[50px] pl-[109px] pb-[85px]`
        }
      >
        Your cart is empty.
      </span>
    </div>
  );
}

// delete statement need completation
