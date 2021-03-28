
import { useState, createContext, useContext, useEffect } from "react";
import products from "../products.json";

import { initiateCheckout } from "../lib/payments";

const defaultCart = {
    products : {}
  }

export const CartContext = createContext({});

export function useCartState() {

    const [cart, updateCart] = useState(defaultCart);
    
    //when we load the page, check if there is any cart on the localStorage and use it 
    useEffect(() => {
        const localData = window.localStorage.getItem("stickers_cart");
        const data = !!localData && JSON.parse(localData);
        if(!!data) {
            updateCart(data);
        }
    },[]);
    
    //when the cart changes, update localStorage
    useEffect(() => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem("stickers_cart", data);
    }, [cart])


    const cartItems = Object.keys(cart.products).map( key => {
        const product = products.find(({ id }) => id === key);
        return {
          ...cart.products[key],
          pricePerItem: product.price
        }
      });
    
      const subtotal = cartItems.reduce((accumulator, {pricePerItem, quantity}) => {
        return accumulator + pricePerItem * quantity;
      }, 0);
    
      const totalItems = cartItems.reduce((accumulator, {quantity}) => {
        return accumulator + quantity;
      }, 0);
    
      function addToCart({ id } = {}){
        updateCart(prev => {
          const cartState = {...prev};
    
          if(!!cartState.products[id]) {
            cartState.products[id].quantity += 1;
          } else {
            cartState.products[id] = {
              id,
              quantity: 1
            };
          }
    
          return cartState; 
        });
    
      };
    
      function checkout() {
        initiateCheckout({
          lineItems : cartItems.map(({id, quantity}) => {
            return {
              price : id,
              quantity
            }
          })
        });
      };

    return {
        subtotal, 
        totalItems, 
        addToCart, 
        checkout
    }
   

}

export function useCart() {
    const cart = useContext(CartContext);
    return cart;
}