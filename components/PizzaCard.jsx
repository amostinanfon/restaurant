import Image from "next/legacy/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link"

const PizzaCard = ({pizza}) => {

  console.log(pizza);

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.img} alt="" height={400} width={400}/>
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.prices[0]}</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
