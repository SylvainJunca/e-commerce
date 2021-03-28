import Head from 'next/head';
import {useCart} from "../hooks/use-cart";
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css';

import products from "../products.json";


import Table from '../components/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerItem',
    Header: 'Unit Price'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];

export default function Home() {

  const { cartItems, updateItem, checkout } = useCart();
  
  const data = cartItems.map((item) => {

    const product = products.find(({id}) => id === item.id);

    const Quantity = () => {

      function handleOnSubmit(e){
        e.preventDefault();

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find(input => input.name === "quantity")?.value;
        updateItem({
          id : item.id,
          quantity : !!quantity && parseInt(quantity)
        });
      }

      return (
        <form onSubmit={handleOnSubmit}>
          <input className={styles.inputQuantity} type="number" name="quantity" min={0} defaultValue={item.quantity}/>
          <button className={styles.updateButton}>Update</button>

        </form>
      )
    }
      return {
        ...item,
        quantity : <Quantity />,
        title : product.title,  
        total : item.quantity * item.pricePerItem
      }
  });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Stickers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>

          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <footer className={styles.footer}>
        React app, Context API, custom React Hook for the cart, Next.js with Dynamic Routes, Stripe Checkout, hosted on Vercel.
      </footer>
    </div>
  )
}