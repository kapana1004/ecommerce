import React from "react";
import menuImg from "../images/icon-menu.svg";
import sneackersImg from "../images/sneakers.png";
import cartImg from "../images/icon-cart.svg";
import avatarImg from "../images/image-avatar.png";

export default function Menubar({
  menuHandleOpen,
  cartHandle,
  item,
  itemCount,
  cartItem,
}) {
  return (
    <div className=" flex justify-center mb-[25px] xl:border-b-2 xl:pb-[49px]">
      <div className=" flex pt-[20px] justify-between w-[100%] ">
        <div className=" flex">
          <img
            onClick={menuHandleOpen}
            className=" w-[16px] h-[16px] ml-[24px] mr-[16px] cursor-pointer  xl:hidden"
            src={menuImg}
            alt="menu"
          />
          <img
            className=" w-[137.5px]  h-[20px]"
            src={sneackersImg}
            alt="sneakers"
          />
        </div>

        <div className=" hidden xl:flex mr-[400px] ml-[56px] ">
          <span className=" text-[15px] text-[#69707D] mr-[32px] ">
            {" "}
            Collections
          </span>
          <span className=" text-[15px] text-[#69707D] mr-[32px]"> Men</span>
          <span className=" text-[15px] text-[#69707D] mr-[32px]"> Women</span>
          <span className=" text-[15px] text-[#69707D] mr-[32px]"> About</span>
          <span className=" text-[15px] text-[#69707D] "> Cotact</span>
        </div>

        <div className="flex relative">
          <img
            onClick={cartHandle}
            className=" w-[22px] h-[20px] cursor-pointer"
            src={cartImg}
            alt="cart"
          />
          <img
            className=" w-[24px] mr-[24px] ml-[22px]"
            src={avatarImg}
            alt="avatar"
          />
          <div
            className={
              itemCount && item > 0
                ? ` flex justify-center items-center w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B] absolute top-[-25%] left-[10%]`
                : ` hidden`
            }
          >
            <span className=" text-[10px] text-white ">{cartItem}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
