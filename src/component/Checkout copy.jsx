import {useState, useEffect } from 'react'; 

// const Checkout = () => {
//     const itemDetails = {
//         name: '',
//         price: 0,
//     }
// }

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
      {
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

  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
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

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.title}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.title}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      Bookstore
      <div>{listItems}</div>
      <div>Cart</div>
      <div>{cartItems}</div>
      <div>Total: £{cartTotal}</div>
    </div>
  );
};

export default Checkout;