import styles from '../styles/Event.module.css';
import Image from 'next/image';




const event = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div>
         <Image 
          className={styles.wrapperItem}
          src='/img/kitchen.jpg'
          alt=''
          height={200}
          width={200}

          />
        </div>
        <div>
          <Image 
            className={styles.wrapperItem}
            src='/img/kitchen.jpg'
            alt=''
            height={200}
            width={200}
            
          />
        </div>
        <div>
         <Image 
          className={styles.wrapperItem}
          src='/img/kitchen.jpg'
          alt=''
          height={200}
          width={200}
          
          />
        </div>
        </div>
    </div>
  )
}



export default event;