
import Menubar from './components/Menubar';
import Slider from './components/Slider';
import Description from './components/Description';
import Activemenu from './components/Activemenu';
import './index.css'
import { useState } from "react";




function App() {

  const [item, setItem] = useState(0);

  const [active, setActive] = useState(false);
  const [ price, setPrice ] = useState(125);

  const priceHandle = () => {

    setPrice(price * item);
  }

  const menuHandleOpen = () => {
    setActive(true);
  };

  const menuHandleClose = () => {
    setActive(!active);
  };

  const [activeCart, setActiveCart] = useState(false);

  const cartHandle = () => {
    setActiveCart(!activeCart)

  }
  return (
    <div className=''>

     <Menubar active = {active} 
              menuHandleOpen = {menuHandleOpen} 
              setActiveCart = {setActiveCart}
              activeCart = {activeCart} 
              cartHandle = {cartHandle} />
     <Slider activeCart={activeCart} 
             item = {item} 
             price = {price} />
     <Description  item = {item} setItem = {setItem} 
                   price = {price} setPrice = {setPrice} priceHandle = {priceHandle} />
     <Activemenu active ={active} menuHandleClose={menuHandleClose} />
     {/* <Cartpopup /> */}
   
    </div>
  );
}

export default App;
