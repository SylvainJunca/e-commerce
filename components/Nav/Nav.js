import { FaShoppingCart } from 'react-icons/fa';
import Link from "next/link";

import styles from './Nav.module.css';
import { useCart } from "../../hooks/use-cart";

const Nav = () => {

    const {subtotal, checkout} = useCart();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.navTitle}>
            Stickers Shop
        </p>         
      </Link>   
      <p className={styles.navCart}>
        <Link href={"/cart/"}>
          <button>
            <FaShoppingCart />
            ${subtotal}
          </button>      
        </Link>
      </p>
    </nav>
  )
}

export default Nav;