import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from 'react';


const Index = ({orders, products}) => {


    const [pizzaList , setPizzaList ] = useState(products);
    const [orderList , setOrderList] = useState(orders);
    const status = ["preparing", "on the way", "delivered"]

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("https://restaurant-amostinanfon.vercel.app/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

   const handleStatus = async (id) => {

const item = orderList.filter((order) => order._id === id)[0];
const currentStatus = item.status;

        try {
            const res = await axios.put("https://restaurant-amostinanfon.vercel.app/api/orders/"+ id , 
                                   { status: currentStatus +1});
            
            setOrderList([
                res.data,
                ...orderList.filter((order) =>order._id !== id )
            ]);
        } catch (error) {
            console.log(error);    
        }
   }

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Produits</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {pizzaList.map((product) => (
                    <tbody>
                    <tr className={styles.trTitle}>
                        <td>
                            <Image
                                src={product.img}
                                width={50}
                                height={50}
                                objectFit='cover'
                                alt='pizza' 
                            />
                        </td>
                        <td>{product._id}</td>
                        <td>{product.title}</td>
                        <td>{product.prices[0]}</td>
                        <td>
                            <button className={styles.button}>Editer</button>
                            <button 
                                className={styles.button}
                                onClick={()=>handleDelete(product._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Commande</h1>
        <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Total</th>
                        <th>Payement</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList.map((order, index) =>(
                    <tbody key={index}>
                    <tr className={styles.trTitle}>
                        <td>
                           {order._id}
                        </td>
                        <td>{order.customer}</td>
                        <td>{order.total}</td>
                        <td>{order.total}</td>
                        <td>
                            {order.method === 0 ? <span>cash</span>:<span>paid</span>}
                        </td>
                        <td>{status[order.status]}</td>
                        <td>
                            <button
                                onClick={() =>handleStatus(order._id)}
                                className={styles.nextstage}
                            >
                                Next Stage
                            </button>
                        </td>
                    </tr>

                </tbody>
                ))}
            </table>  
        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

    const myCookie = ctx.req?.cookies || "";
   
   if (myCookie.token !== process.env.TOKEN) {
    return {
        redirect: {
            destination: "https://restaurant-amostinanfon.vercel.app/login",
            permanent: false
        }
     }
   }

    const productsRes = await axios.get("https://restaurant-amostinanfon.vercel.app/api/products");
    const ordersRes = await axios.get("https://restaurant-amostinanfon.vercel.app/api/orders");

    return {
        props:{
            products: productsRes.data,
            orders: ordersRes.data
        }
    }
}


export default Index;