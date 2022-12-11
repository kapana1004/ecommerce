import Menubar from "./components/Menubar";
import Slider from "./components/Slider";
import Description from "./components/Description";
import Activemenu from "./components/Activemenu";
import "./index.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState(0);
  const [itemCount, setItemCount] = useState(false);

  const [active, setActive] = useState(false);
  const [price, setPrice] = useState(125);
  const [total, setTotal] = useState(price);
  const [activeContext, setActiveContex] = useState(true);

  const deleteContextHandle = () => {
    setActiveContex(!activeContext);
    setItem(0);
  };

  const priceHandle = () => {
    setTotal(price * item);
    setItemCount(true);
  };

  const menuHandleOpen = () => {
    setActive(true);
  };

  const menuHandleClose = () => {
    setActive(!active);
  };

  const [activeCart, setActiveCart] = useState(false);

  const cartHandle = () => {
    setActiveCart(!activeCart);
  };
  return (
    <div className="">
      <Menubar
        active={active}
        menuHandleOpen={menuHandleOpen}
        setActiveCart={setActiveCart}
        activeCart={activeCart}
        cartHandle={cartHandle}
        item={item}
        itemCount={itemCount}
      />
      <Slider
        activeCart={activeCart}
        item={item}
        setItem={setItem}
        price={price}
        itemCount={itemCount}
        total={total}
        deleteContextHandle={deleteContextHandle}
        activeContext={activeContext}
      />
      <Description
        item={item}
        setItem={setItem}
        price={price}
        setPrice={setPrice}
        priceHandle={priceHandle}
        itemCount={itemCount}
        setItemCount={setItemCount}
      />
      <Activemenu active={active} menuHandleClose={menuHandleClose} />
    </div>
  );
}

export default App;
