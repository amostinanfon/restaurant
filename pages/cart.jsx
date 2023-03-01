import styles from "../styles/Cart.module.css";
import Image from 'next/image';


const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                  {/*
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th> 
                    */}
                </tr>
                {/* <tr>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image 
                        src="/img/pizza.png" 
                        layout="fill" 
                        objectFit="cover" 
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>
                      CORALZO
                    </span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      Douable ingredients , sauce tomates
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>400 fcfa</span>
                  </td>
                  <td>
                    <span className={styles.total}>400 fcfa</span>
                  </td>
                </tr> */}
            </table>
        </div>
        {/* <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}> CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Sous-Total:</b>250 Fcfa
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>250 Fcfa
            </div>
            <button className={styles.button}>PAYER MAINTENANT</button>
          </div>
        </div>
        <div className={styles.right}></div> */}
    </div>
  )
}


export default Cart;