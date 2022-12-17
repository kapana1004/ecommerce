import Menubar from "./components/Menubar";
import Slider from "./components/Slider";
import Description from "./components/Description";
import Activemenu from "./components/Activemenu";
import Activecontent from "./components/Activecontent";
import "./index.css";
import { useState } from "react";
import img1 from "./images/image-product-1.jpg";
import img2 from "./images/image-product-2.jpg";
import img3 from "./images/image-product-3.jpg";
import img4 from "./images/image-product-4.jpg";

function App() {
  const [item, setItem] = useState(0);
  const [itemCount, setItemCount] = useState(false);
  const [active, setActive] = useState(false);
  const [price, setPrice] = useState(125);
  const [total, setTotal] = useState(price);
  const [activeContext, setActiveContex] = useState(true);
  const [activAdd, setActiveAdd] = useState(true);
  const [activeCart, setActiveCart] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [content, setContent] = useState(false);

  const contentCloseHandle = () => {
    setContent(!content);
  };

  const deleteContextHandle = () => {
    setActiveContex(!activeContext);
    setItem(0);
  };

  const priceHandle = () => {
    setTotal(price * item);
    setItemCount(true);
    setActiveAdd(!activAdd);
    setCartItem(cartItem + item);
  };

  const menuHandleOpen = () => {
    setActive(true);
  };

  const menuHandleClose = () => {
    setActive(!active);
  };

  const cartHandle = () => {
    setActiveCart(!activeCart);
  };

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

  const imageOneHandle = () => {
    setSlideIndex(0);
  };
  const imageTwoHandle = () => {
    setSlideIndex(1);
  };
  const imageThreeHandle = () => {
    setSlideIndex(2);
  };
  const imageFourHandle = () => {
    setSlideIndex(3);
  };
  return (
    <div className=" flex flex-col ">
      <Menubar
        active={active}
        menuHandleOpen={menuHandleOpen}
        setActiveCart={setActiveCart}
        activeCart={activeCart}
        cartHandle={cartHandle}
        item={item}
        itemCount={itemCount}
        cartItem={cartItem}
        // activAdd={activAdd}
      />

      <div className=" flex flex-col  xl:flex-row xl:pl-[50px]">
        <Slider
          activeCart={activeCart}
          item={item}
          setItem={setItem}
          price={price}
          itemCount={itemCount}
          total={total}
          deleteContextHandle={deleteContextHandle}
          activeContext={activeContext}
          slides={slides}
          slideIndex={slideIndex}
          slideHandleLeft={slideHandleLeft}
          slideHandleRight={slideHandleRight}
          imageOneHandle={imageOneHandle}
          imageTwoHandle={imageTwoHandle}
          imageThreeHandle={imageThreeHandle}
          imageFourHandle={imageFourHandle}
          content={content}
          contentCloseHandle={contentCloseHandle}
        />

        <Description
          item={item}
          setItem={setItem}
          price={price}
          setPrice={setPrice}
          priceHandle={priceHandle}
          itemCount={itemCount}
          setItemCount={setItemCount}
          activAdd={activAdd}
          setActiveAdd={setActiveAdd}
        />
      </div>

      <Activemenu active={active} menuHandleClose={menuHandleClose} />
      <Activecontent
        slides={slides}
        slideIndex={slideIndex}
        slideHandleLeft={slideHandleLeft}
        slideHandleRight={slideHandleRight}
        imageOneHandle={imageOneHandle}
        imageTwoHandle={imageTwoHandle}
        imageThreeHandle={imageThreeHandle}
        imageFourHandle={imageFourHandle}
        content={content}
        contentCloseHandle={contentCloseHandle}
      />
    </div>
  );
}

export default App;
