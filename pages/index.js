import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Sticker Shop!
        </h1>

        <p className={styles.description}>
         The best place to find cute stickers!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a>
              <img src="/images/avocado.png/" alt="cute cartoon avocado with a face"/>
              <h3>Avocado face</h3>
              <p>Who doesn't like some avocado? On its own or in Guacamole. Yummy!</p>
            </a>
          </li>
         
          <li className={styles.card}>
            <a>
              <img src="/images/unicorn.jpg/" alt="cute cartoon unicorn eating a cupcake"/>
              <h3>Unicorn with cupcake</h3>
              <p>It's not a dog, it's not a pony, it's colourful and it's a unicorn!</p>
            </a>
          </li>
          
          <li className={styles.card}>
            <a>
              <img src="/images/racoon.jpeg/" alt="racoon realness, simple and cute"/>
              <h3>Racoon realness</h3>
              <p>Direct from Toronto, the most famous cute neighboor you can have.</p>
            </a>
          </li>    

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
