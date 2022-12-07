import React from "react";
import { useState } from "react";

export default function Activemenu({ active, menuHandleClose }) {
  // // const [active, setActive] = useState(false);

  // // const menuHandleClose = () => {
  // //   setActive(!active);
  // };

  return (
    <div
      className={
        active
          ? `bg-transparent absolute w-[100%] h-[900px] opacity-[75%] top-0`
          : `hidden`
      }
    >
      <div className=" w-[250px] h-[100%] bg-white absolute top-0">
        <div className=" pt-[25px] pl-[25px] ">
          <img
            onClick={menuHandleClose}
            className=" mb-[54px] cursor-pointer"
            src="./images/icon-close.svg"
            alt="close"
          />

          <h2 className=" text=[#1D2026] text-[18px] font-bold leading-[26px] mb-[20px] cursor-pointer">
            {" "}
            Collections
          </h2>
          <h2 className=" text=[#1D2026] text-[18px] font-bold leading-[26px] mb-[20px] cursor-pointer">
            Men
          </h2>
          <h2 className=" text=[#1D2026] text-[18px] font-bold leading-[26px] mb-[20px] cursor-pointer">
            Women
          </h2>
          <h2 className=" text=[#1D2026] text-[18px] font-bold leading-[26px] mb-[20px]  cursor-pointer">
            About
          </h2>
          <h2 className=" text=[#1D2026] text-[18px] font-bold leading-[26px] cursor-pointer">
            Contact
          </h2>
        </div>
      </div>
    </div>
  );
}
