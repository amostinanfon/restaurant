import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';


const Product = ({pizza}) => {
  const [size, setSize] = useState(0);


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>FCFA {pizza.prices[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>CHOISIR LA TAILLE</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>PETITE</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>MOYEN</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>CHOIX INGREDIENTS ADDITIONNELS</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) =>(
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>AJOUTER A LA CARTE</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
  // Fetch data from external API
  const res = await axios.get(`http://192.168.31.135:3000/api/products/${params.id}`);

  // Pass data to the page via props
  return { 
    props: 
      { 
        pizza: res.data
      } 
  }
}


export default Product;
