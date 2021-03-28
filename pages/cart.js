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

  const { cartItems, checkout } = useCart();
  
  const data = cartItems.map((item) => {

  const product = products.find(({id}) => id === item.id);
      return {
      title : product.title,  
      quantity : item.quantity,
      pricePerItem : item.pricePerItem,
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}