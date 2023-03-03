import styles from "../styles/Cart.module.css";
import Image from 'next/image';
import { useDispatch , useSelector } from "react-redux";


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  //console.log(cart);

  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Extras</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
            {
              cart.products.map((product) => (
                  <tr className={styles.tr} key={product._id}>
                    <td>
                      <div className={styles.imgContainer}>
                        <Image 
                          src={product.img} 
                          layout="fill" 
                          objectFit="cover" 
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <span className={styles.name}>
                        {product.title}
                      </span>
                    </td>
                    <td>
                      <span className={styles.extras}>
                        {
                          product.extras.map((extra) =>(
                            <span key={extra._id}>{extra.text} , </span>
                          ))
                        }
                      </span>
                    </td>
                    <td>
                      <span className={styles.price}>{product.price}Fcfa</span>
                    </td>
                    <td>
                      <span className={styles.quantity}>{product.quantity}</span>
                    </td>
                    <td>
                      <span className={styles.total}>
                         {product.price * product.quantity}Fcfa
                      </span>
                    </td>
                  </tr>
              ))
            }
            </tbody>
            </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}> CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Sous-Total:</b>{cart.total} Fcfa
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>{cart.total} Fcfa
            </div>
            <button className={styles.button}>PAYER MAINTENANT</button>
          </div>
        </div>
        <div className={styles.right}></div>
    </div>
  )
}


export default Cart;