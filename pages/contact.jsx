import styles from  '../styles/Contact.module.css';
import { useState } from 'react';
import Image from 'next/image';



const Contact = () => {


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        console.log(1)
    }


    return (<>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <Image src="/icon/contact.jpg" objectFit="cover" layout="fill" alt="" />
                </div>
                    <div className={styles.item}>
                        <div className={styles.text}>
                            <h1>Contact US</h1>
                        </div>
                        <div className={styles.main}>
                        <div className={styles.wrapperItem}>
                            <div className={styles.card}>
                                <div className={styles.cardItem}>
                                    <label className={styles.label}>Full Name</label>
                                    <input 
                                        type='text'
                                        className={styles.input}
                                        placeholder='Amos TINA NFON'
                                        onChange={(e) =>setFullName(e.target.value)} 
                                        />
                                </div>
                                <div className={styles.cardItem}>
                                    <label className={styles.label}>Email</label>
                                    <input
                                        className={styles.input} 
                                        placeholder='amostinanfon17@gmail.com'
                                        type="text"
                                        onChange={(e) =>setEmail(e.target.value)}
                                        />
                                </div>
                                <div className={styles.cardItem}>
                                    <label className={styles.label}>Message</label>
                                    <input
                                        placeholder='Ici votre message' 
                                        type="text"
                                        className={styles.input}
                                        onChange={(e) =>setMessage(e.target.value)}
                                        />
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.cardRight}>
                                    <h1>Contact</h1>
                                    <p>amostinanfon17@gmail.com</p>
                                </div>
                                <div className={styles.cardRight}>
                                    <h1>Localisation</h1>
                                    <p>Douala Beedi</p>
                                    <p>Cameroun</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperItem}>
                            <div
                                className={styles.cardItem} 
                                >
                                <button
                                    className={styles.button}
                                    onChange={handleClick} 
                                    >
                                    Contact Us
                                </button>
                            </div>
                            <div className={styles.cardItem}>
                                <div className={styles.img}>
                                    <Image src="/img/facebook.png" objectFit="cover" layout="fill" alt="" />
                                </div>
                                <div className={styles.img}>
                                    <Image src="/img/instagram.png" objectFit="cover" layout="fill" alt="" />
                                </div>
                                <div className={styles.img}>
                                    <Image src="/img/twitter.png" objectFit="cover" layout="fill" alt="" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}




export default Contact ;