import axios from 'axios';
import {useState, useEffect } from 'react'; 

const Checkout = () => {
    const itemDetails = {
        name: '',
        price: 0,
    }
}
    
const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));