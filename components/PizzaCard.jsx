import Image from "next/legacy/image";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = ({pizza}) => {

  console.log(pizza)

  return (
    <div className={styles.container}>
      <Image src={pizza.img} alt="" width="400" height="400" />
      <h1 className={styles.title}>NDOGMATCHANG</h1>
      <span className={styles.price}>{pizza.prices[0]} FCFA</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
