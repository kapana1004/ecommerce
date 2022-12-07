import React from "react";
import { useState } from "react";

export default function Menubar({ menuHandleOpen, cartHandle }) {
  // const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className=" flex justify-center mb-[25px]">
      <div className=" flex pt-[20px] justify-between w-[100%] ">
        <div className=" flex">
          <img
            onClick={menuHandleOpen}
            className=" w-[16px] h-[16px] ml-[24px] mr-[16px] cursor-pointer "
            src="./images/icon-menu.svg"
            alt="menu"
          />

          <img
            className=" w-[137.5px]  h-[20px]"
            src="./images/sneakers.png"
            alt="sneakers"
          />
        </div>

        <div className="flex relative">
          <img
            onClick={cartHandle}
            className=" w-[22px] h-[20px] cursor-pointer"
            src="./images/icon-cart.svg"
            alt="cart"
          />
          <img
            className=" w-[24px] mr-[24px] ml-[22px]"
            src="./images/image-avatar.png"
            alt="avatar"
          />

          <div
            className=" w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B] absolute top-[-25%] ;
         left-[10%] hidden"
          >
            <span className=" text-xs text-white absolute top-[-2px] left-[6px]">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
