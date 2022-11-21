import Image from "next/legacy/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="400" height="400" />
      <h1 className={styles.title}>NDOGMATCHANG</h1>
      <span className={styles.price}>500 FCFA</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
