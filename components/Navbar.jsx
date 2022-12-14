import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="telephone" width={32} height={32}/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>COMMANDEZ !!!</div>
          <div className={styles.text}>654 046 638</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Accueil</li>
          <li className={styles.listItem}>Produits</li>
          <li className={styles.listItem}>Menu</li>
          {/* <Image src="/img/logo.png" alt="logo" width={160} height={69} /> */}
          TCHOP YA MO
          <li className={styles.listItem}>Evenements</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
