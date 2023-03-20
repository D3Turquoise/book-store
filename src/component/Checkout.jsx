import {useState, useEffect } from 'react'; 

// const Checkout = () => {
//     const itemDetails = {
//         name: '',
//         price: 0,
//     }
// }

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      volumeInfo: {
        title: "Book 1",
        imageLinks: ""
      },
      saleInfo: {
        listPrice: 100
      },
      rating: 5,
      url: "",
    },
    {
      id: 2,
      volumeInfo: {
        title: "Book 2",
        imageLinks: ""
      },
      saleInfo: {
        listPrice: 300
      },
      rating: 5,
      url: "",
    },
    {
      id: 3,
      volumeInfo: {
        title: "Book3",
        imageLinks: ""
      },
      saleInfo: {
        listPrice: 200
      },
      rating: 5,
      url: "",
    }

]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].saleInfo.listPrice;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
};

const removeFromCart = (el) => {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
  setCart(hardCopy);
};

  const listCartItems = cart.map((el, index) => (
    <div key={index}>
      {`${el.volumeInfo.title}: $${el.saleInfo.listPrice}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      Bookstore
      <div>{listCartItems}</div>
      <div>Cart</div>
      {/* <div>{cartItems}</div> */}
      <div>Total: £{cartTotal}</div>
    </div>
  );
};

export default Checkout;