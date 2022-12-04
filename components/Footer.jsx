import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates aliquid possimus, dolorum neque beatae mollitia natus.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOCALISATION</h1>
          <p className={styles.text}>
            DOUALA CAMEROUN BEEDI.
            <br /> NDOGMATCHANG, LIGNE 1
            <br /> (+237) 654 046 638
          </p>
          <p className={styles.text}>
            DOUALA CAMEROUN BEEDI.
            <br /> NDOGMATCHANG, LIGNE 1
            <br /> (+237) 654 046 638
          </p>
          <p className={styles.text}>
            DOUALA CAMEROUN BEEDI.
            <br /> NDOGMATCHANG, LIGNE 1
            <br /> (+237) 654 046 638
          </p>
          <p className={styles.text}>
            DOUALA CAMEROUN BEEDI.
            <br /> NDOGMATCHANG, LIGNE 1
            <br /> (+237) 654 046 638
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HEURE DE TRAVAIL</h1>
          <p className={styles.text}>
            LUNDI A VENDREDI
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SAMEDI - DIMANCHE
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
