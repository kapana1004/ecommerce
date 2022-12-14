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
  const [activAdd, setActiveAdd] = useState(true);
  const [activeCart, setActiveCart] = useState(false);
  const [cartItem, setCartItem] = useState(0);

  const deleteContextHandle = () => {
    setActiveContex(!activeContext);
    setItem(0);
  };

  const priceHandle = () => {
    setTotal(price * cartItem);
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
    </div>
  );
}

export default App;
