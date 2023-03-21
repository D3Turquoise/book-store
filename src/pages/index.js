import Header from '../component/Header'
import Search from '../component/Searchbar'
import SearchResult from '../component/SearchResult'
import SearchResultGenere from '../component/SearchResultGenere';
import Toprated from '../component/Toprated'
import Footer from '../component/Footer'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import CartItems from '../component/CartItems'



export default function Home() {
  const [keyword, setKeyword] = useState("Children");
  const [keyword2, setKeyword2] = useState();
  const [searchResults, setSearchResults] = useState(null);
  const [searchResults2, setSearchResults2] = useState([]);
  const [compType, setcompType] = useState("textbox");
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemCount, setcartItemCount] = useState(0);
  
  useEffect(() => {
    renderContent();
  }, [showCheckout]);

  useEffect(() => {
    total()
    setcartItemCount(
      (
        cart.reduce((acc, item) => acc + item.quantity, 0)
    ));

  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].saleInfo.listPrice*cart[i].quantity;
    }
    setCartTotal(totalVal.toFixed(2));
  };
 

  const addToCart = (el) => {
    let hardCopy = [...cart];
    let hardCopy1 = hardCopy.filter((cartItem) => cartItem.id === el.id);
    let hardCopy2 = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    if(hardCopy1 && hardCopy1[0] && hardCopy1.length>0){ 
        hardCopy1[0].quantity = hardCopy1[0].quantity +1 
        setCart([...hardCopy2, hardCopy1[0], ]);
    } else {
        el.quantity=1
        setCart([...cart, el]);
    }
    setcartItemCount(
      (
        cart.reduce((acc, item) => acc + item.quantity, 0)
    ));
};

const removeFromCart = (el) => {
    let hardCopy = [...cart];
    let hardCopy2 = []
    let hardCopy1 = hardCopy.filter((cartItem) => cartItem.id == el.id);
    if(hardCopy1.length>0 && hardCopy1[0] && hardCopy1[0].quantity >0){
        hardCopy1[0].quantity = hardCopy1[0].quantity - 1 
        hardCopy2 = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        if (hardCopy1[0].quantity>0){         
           setCart([...hardCopy2, hardCopy1[0]]);
        } else {
          setCart([...hardCopy2]); 
        }
    } else {
        setCart([...cart]);
    }
    setcartItemCount(
      (
        cart.reduce((acc, item) => acc + item.quantity, 0)
    ));
};

  function renderContent() {
    if (showCheckout) {
      return (
        <>
        <CartItems cart={cart} cartItemCount={cartItemCount} cartTotal={cartTotal} addToCart={addToCart} removeFromCart={removeFromCart} setKeyword={setKeyword} setShowCheckout={setShowCheckout}  setcompType={setcompType}/>
        </>
      );
    } else {
  return (
    <>
     <div className="m-5">
        <Search keyword={keyword} setKeyword={setKeyword} compType={compType} setcompType={setcompType}/>
      </div>
      { (compType === "navbar" )? (
        <>
 
      <div className="m-5">
      <SearchResultGenere keyword2={keyword2} searchResults={searchResults} setSearchResults={setSearchResults} addToCart={addToCart}/>
        
      </div>
      </>
      ): ((compType === "textbox" && keyword && keyword!=="")? (

      <div className="m-5">
        <SearchResult keyword={keyword} searchResults={searchResults} setSearchResults={setSearchResults} addToCart={addToCart}/>
      </div>
     ):(
     <div className="m-5">
      <Toprated keyword={keyword} searchResults2={searchResults2} setSearchResults2={setSearchResults2} addToCart={addToCart}/> 
      </div>
     
     ))};

    </>
  )
}
 }

return (
  <>
  <div className='flex flex-col min-h-screen'>
    <Header keyword={keyword2} setKeyword={setKeyword} setKeyword2={setKeyword2} compType={compType} setcompType={setcompType} showCheckout={showCheckout} setShowCheckout={setShowCheckout} cartItemCount={cartItemCount}/>
    {
    renderContent()
    }
    <div className='m-5'>
        <Footer />
      </div>
      </div>
  </>
)
}