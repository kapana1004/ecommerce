import React from "react";

export default function Description() {
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

      <div className=" ml-[24px] flex mt-[28px] ">
        <span className=" w-[106px] "> $125.00</span>
        <span className=" mr-[90px] w-[51px] bg-[#FFEEE2] pl-[9px] text-[#FF7E1B] text-[16px] font-sans rounded-[6px]">
          50%
        </span>
        <span className=" line-through">$250.00</span>
      </div>

      <div className=" flex justify-between bg-[#F6F8FD]">
        <img src="./images/icon-minus.svg" alt="minus" />
        <span>0</span>
        <img src="./images/icon-plus.svg" alt="plus" />
      </div>
    </div>
  );
}
