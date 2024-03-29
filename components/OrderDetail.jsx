import { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';



const  OrderDetail = ({total, createOrder, setCash}) => {

  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");


  const handleClick = () => {
    createOrder({ customer, address, total, method: 0})
 }

 
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span 
          className={styles.close} 
          onClick={() => setCash(false)}
        >
            X
        </span>
        <h1>paiement à la livraison</h1>
        <div className={styles.item}>
          <label >Surname</label>
          <input 
            placeholder='John Doe'
            type="text" 
            className={styles.input}
            onChange={(e) =>setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Tel:</label>
          <input 
            type="text"
            placeholder='+237 694 291 173'
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adresse</label>
          <textarea 
            rows={5}
            placeholder="Ndongbong"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button 
              className={styles.button} 
              onClick={handleClick}
            >
              Payer
        </button>
      </div>
    </div>
  )
}








export default OrderDetail ;