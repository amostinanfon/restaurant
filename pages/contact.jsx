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
                    <div className={styles.itemImg}>
                        <Image src="/img/contact.jpg" alt="" objectFit='cover' layout='fill'/>
                    </div>
                </div>
                    <div className={styles.item}>
                        <div className={styles.text}>
                            Contact US
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
                                    <h2>Contact</h2>
                                    <span>amos17@gmail.com</span>
                                </div>
                                <div className={styles.cardRight}>
                                    <h2>Localisation</h2>
                                    Douala Beedi<br/>
                                    Cameroun<br/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperItem}>
                            <div
                                className={styles.cardItem2} 
                                >
                                <button
                                    className={styles.button}
                                    onChange={handleClick} 
                                    >
                                    Envoyez
                                </button>
                            </div>
                            <div className={styles.cardItem2}>
                                <div className={styles.imgItem}>
                                    <div className={styles.img}>
                                        <Image src="/img/facebook.png" alt="" width={32} height={32}/>
                                    </div>
                                    <div className={styles.img}>
                                        <Image src="/img/linkedin.png" alt="" width={32} height={32}/>
                                    </div>
                                    <div className={styles.img}>
                                        <Image src="/img/twitter.png" alt="" width={32} height={32}/>
                                    </div>
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