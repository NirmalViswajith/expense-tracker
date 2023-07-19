import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Cart from './Components/Cart';


function App() {
  const [cartShow, setCartShow] = useState(false);
  const showCartHandler = () => {
    setCartShow(true);
  }
  const hideCartHandler = () => {
    setCartShow(false);
  }
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  return (
    <div >
      {cartShow && <Cart products={productsArr} onClose={hideCartHandler}/>}
      <NavBar onOpen={showCartHandler} />
      <Header />
      <Products productsArr={productsArr}/>
      <Footer />
    </div>
  );
}

export default App;