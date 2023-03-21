import Header from '../component/Header'
import Search from '../component/Searchbar'
import SearchResult from '../component/SearchResult'
import SearchResultGenere from '../component/SearchResultGenere';
import Toprated from '../component/Toprated'
import Footer from '../component/Footer'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';



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
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].saleInfo.listPrice*cart[i].quantity;
    }
    setCartTotal(totalVal);
  };
 

  const addToCart = (el) => {
    let hardCopy = [...cart];
    let itemCount = cartItemCount
    console.log("id is"+el.id)
    let hardCopy1 = hardCopy.filter((cartItem) => cartItem.id === el.id);
    console.log("cart item id is")
    console.log(hardCopy1)
    if(hardCopy1 && hardCopy1[0] && hardCopy1.length>0){
        console.log(hardCopy1[0].volumeInfo.title)
        console.log(hardCopy1[0])       
        hardCopy1[0].quantity = hardCopy1[0].quantity +1 
        let hardCopy2 = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart([...hardCopy2, hardCopy1[0], ]);
        setcartItemCount(itemCount+1)
    } else {
        el.quantity=1
        console.log("cart items in first")
        console.log(cart);
        setCart([...cart, el]);
        console.log("cart items in second")
        console.log(cart);
        setcartItemCount(itemCount+1)
    }
};

const listCartItems = cart.map((item, index) => (
  <div key={index}>
    <div className="flex flex-row justify-center items-center flex-wrap">
      <div className="flex flex-row items-center flex-wrap text-wrap-full m-6">
          {item.volumeInfo.title}
        <div/>
        <div className="ml-2">
          <p className="text-xs md:text-sm font-semibold">${item.saleInfo.listPrice}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <button className="bg-blue-500 text-white rounded-md p-1" onClick={() => removeFromCart(item)}>
          <svg className="fill-white"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 606v-60h560v60H200Z"/></svg>
        </button>
        <p className="text-lg font-semibold">{item.quantity}</p>
        <button className="bg-blue-500 text-white rounded-md p-1" onClick={() => addToCart(item)}>
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/></svg>
        </button>
        <p className="text-lg font-semibold">${item.saleInfo.listPrice * item.quantity}</p>
      </div>
    </div>
  </div>
));

const removeFromCart = (el) => {
    console.log("i am in remove")
    let hardCopy = [...cart];
    let itemCount = cartItemCount
    let hardCopy1 = hardCopy.filter((cartItem) => cartItem.id == el.id);
    if(hardCopy1.length>0 && hardCopy1[0] && hardCopy1[0].quantity >0){
        hardCopy1[0].quantity = hardCopy1[0].quantity - 1 
        let hardCopy2 = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart([...hardCopy2, hardCopy1[0]]);
        setcartItemCount(itemCount-1)
    } else {
        setCart([...cart]);
    }
};

  function renderContent() {
    if (showCheckout) {
      return (
       <><div className="flex flex-row border-4 justify-center text-3xl">Cart Summary</div>
       <div className="text-2xl justify-left mx-10">{listCartItems} </div>
       <div className="flex justify-center">
      <h1 className="flex flex-1 text-3xl w-10 flex-row justify-center text-right">
          Total= {cartTotal}
        </h1>
        </div></>
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