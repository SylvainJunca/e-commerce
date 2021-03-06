import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import products from "../products.json";
import { useCart } from "../hooks/use-cart";


export default function Home() {

  const { addToCart } = useCart();


  return (
    <div className={styles.container}>
      <Head>
        <title>Stickers Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
         The best place to find cute stickers!
        </p>
        <ul className={styles.grid}>

          {products.map( product => {
            const { id, title, price, image, alt, description } = product;
            return (
              <li key = {id} className={styles.card}>
              <Link href={`/products/${id}`}>
                <a>
                  <img src={image} alt={alt}/>
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{description}</p>
                </a>            
              </Link>
              <p>
                <button className={styles.button} onClick={ () => {
                  addToCart({id});
                }}>Add to cart</button>
              </p>
            </li>
            )
           
          })}    

        </ul>
      </main>

      <footer className={styles.footer}>
        React app, Context API, custom React Hook for the cart, Next.js with Dynamic Routes, Stripe Checkout, hosted on Vercel.
      </footer>
    </div>
  )
}
