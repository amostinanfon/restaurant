import Image from "next/legacy/image";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = ({pizza}) => {

  console.log(pizza);

  return (
    <div className={styles.container}>
      <Image src={pizza.img} alt="" height={400} width={400}/>
      <h1 className={styles.title}>NDOGMATCHANG</h1>
      <span className={styles.price}>1.000 FCFA</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt minus 
        quidem temporibus aspernatur, natus corrupti sit iure a,
         neque ullam provident dolores expedita magni nostrum? Autem ipsa totam iusto vel.
      </p>
    </div>
  );
};

export default PizzaCard;
