import {useState, useEffect } from 'react'; 

const Checkout = (cart,addToCart,removeFromCart,listCartItems) => {

const [cartTotal, setCartTotal] = useState(0);

let car=[]
if(cart.length>0){
 car = [...cart]
} 
   
  useEffect(() => {
    total();
  },);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].saleInfo.listPrice;
    }
    setCartTotal(totalVal);
  };
 



  return (
    <>
   <div className="flex justify-center">
      <h1 className="flex flex-1 text-5xl flex-col justify-between mt-4 text-center">
        <span className="text-active">Shopping Cart</span>
      </h1>
      </div>
      <div className="flex justify-center">
      <h2 className="flex flex-1 flex-col text-2xl  justify-between mt-4 text-center"
            type="submit"
          >
        </h2>
        </div>
          <div className="flex justify-center">
          <div className="p-4">
            <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {
              car.map((item) => {
                <p>
                    {item.id}
                </p>
              }
            )}
           </div>

           </div>
           </div>
   </>
  )
  
            };

export default Checkout;