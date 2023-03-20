import { useState } from 'react';
import styles from '../styles/Add.module.css';
import axios from "axios";
import { useRouter } from "next/router";


// const Add = ({setClose}) => {
    const Add = () => {


    const [file , setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState(null);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span 
                    className={styles.close}
                    onClick={() =>setClose(true)}
                >
                    X
                </span>
            </div>
            {/* <div className={styles.item}>
                  <label className={styles.label}>Desc</label>
                  <textarea 
                    rows={4}
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                  />
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Prices</label>
                <input
                    className={`${styles.input}` `${styles.inputSm}` } 
                    type="number"
                    placeholder='Medium'
                    onChange={(e) =>changePrice(e,1)}
                />
                <input
                    className={`${styles.input}` `${styles.inputSm}` } 
                    type="number"
                    placeholder='Larger'
                    onChange={(e) =>changePrice(e,2)}
                /> 
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                </div> 
            </div> */}      
        </div>
    )
}



export default Add ;