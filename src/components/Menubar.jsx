import React from "react";
import { useState } from "react";

export default function Menubar() {
  return (
    <div>
      <div className=" flex flex-row ">
        <img src="./images/icon-menu.svg" alt="menu" />
        <h1 className=" text-red-500"> sneakers</h1>
        <img src="./images/icon-cart.svg" alt="cart" />
        <img src="./images/image-avatar.png" alt="avatar" />
      </div>
    </div>
  );
}
