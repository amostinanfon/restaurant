import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from 'react';


const index = ({orders, products}) => {


    const [pizzaList , setPizzaList ] = useState(products);
    const [orderList , setOrderList] = useState(orders);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("https://restaurant-lake-nine.vercel.app/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
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
                        <td>{product._id.slice(0,5)}...</td>
                        <td>{product.title}</td>
                        <td>{product.prices[0]}</td>
                        <td>
                            <button className={styles.button}>Edit</button>
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
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList.map((order, index) =>(
                    <tbody key={index}>
                    <tr className={styles.trTitle}>
                        <td>
                           {order._id.slice(0,5)}...
                        </td>
                        <td>{order.customer}</td>
                        <td>{order.total}</td>
                        <td>{order.total}</td>
                        <td>
                            {order.method === 0 ? <span>cash</span>:<span>paid</span>}
                        </td>
                        {/* <td>{status[order.status]}</td> */}
                        <td>
                            <button
                                onClick={() =>handleStatus(order._id)}
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

export const getServerSideProps = async () => {
    const productsRes = await axios.get("https://restaurant-lake-nine.vercel.app/api/products");
    const ordersRes = await axios.get("https://restaurant-lake-nine.vercel.app/api/orders");

    return {
        props:{
            products: productsRes.data,
            orders: ordersRes.data
        }
    }
}


export default index;