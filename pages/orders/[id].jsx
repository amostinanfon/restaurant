import styles from "../../styles/Order.module.css";
import Image from "next/legacy/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {  
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>No Commande</th>
                <th>Client</th>
                <th>Adresse</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>129837819237</span>
                </td>
                <td>
                  <span className={styles.name}>Amos TINA</span>
                </td>
                <td>
                  <span className={styles.address}>Nyalla Pariso</span>
                </td>
                <td>
                  <span className={styles.total}> FCFA 79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Paiement</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>En cours</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>En chemin</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Livré</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CARTE TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SOUS TOTAL:</b>79.60 FCFA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>REDUCTION:</b>0.00 FCFA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>79.60 FCFA
          </div>
          <button disabled className={styles.button}>
            PAYER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
