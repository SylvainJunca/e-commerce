import Head from 'next/head';
import styles from '../styles/Home.module.css';
import products from "../products.json";
import useCart from "../hooks/use-cart";


export default function Home() {

  const {subtotal, totalItems, addToCart, checkout} = useCart();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stickers Shop!
        </h1>

        <p className={styles.description}>
         The best place to find cute stickers!
        </p>

        <p className={styles.description}>
         <strong> Items:</strong> {totalItems}
         <strong> Total Cost:</strong> $ { subtotal }
         <button className={styles.button} onClick={checkout}> Check Out</button>
        </p>

        <ul className={styles.grid}>

          {products.map( product => {
            const { id, title, price, image, alt, description } = product;
            return (
              <li key = {id} className={styles.card}>
              <a>
                <img src={image} alt={alt}/>
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{description}</p>
              </a>
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
