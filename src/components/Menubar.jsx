import React from "react";
import { useState } from "react";

export default function Menubar() {
  // const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className=" flex justify-center mb-[25px]">
      <div className=" flex pt-[20px] justify-between w-[100%] ">
        <div className=" flex">
          <img
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

        <div className="flex">
          <img
            className=" w-[22px] h-[20px] cursor-pointer"
            src="./images/icon-cart.svg"
            alt="cart"
          />
          <img
            className=" w-[24px] mr-[24px] ml-[22px]"
            src="./images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
