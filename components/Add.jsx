import { useState } from 'react';
import styles from '../styles/Add.module.css';
import axios from "axios";
import { useRouter } from "next/router";


const Add = ({setClose}) => {

    const [file , setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState(null);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);



    const changePrice = (e,index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    }

    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]:e.target.value});
    }

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    }

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/de4faw8fu/image/upload",
                data
            );
            console.log(uploadRes.data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span 
                    className={styles.close}
                    onClick={() =>setClose(true)}
                >
                    XXXXXXXX
                </span>
                <h1>Ajouter une nouvelle Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>choisir une image</label>
                    <input 
                        type="file"
                        onChange={(e) =>setFile(e.target.files[0])}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                        type="text"
                        className={styles.input}
                        onChange={(e) =>setTitle(e.target.value)}
                    />
                </div>
            </div>
             <div className={styles.item}>
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
                    className={`${styles.input} ${styles.inputSm}` } 
                    type="number"
                    placeholder='Medium'
                    onChange={(e) =>changePrice(e,1)}
                />
                <input
                    className={`${styles.input} ${styles.inputSm}` } 
                    type="number"
                    placeholder='Larger'
                    onChange={(e) =>changePrice(e,2)}
                /> 
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                </div> 
            </div>     
        </div>
    )
}



export default Add ;