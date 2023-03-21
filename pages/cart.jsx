import styles from "../styles/Cart.module.css";
import Image from 'next/image';
import { useDispatch , useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { 
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios';
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {

    //  This values are the props in the UI 
    const cart = useSelector(state => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const currency = "USD";
    const amount = cart.total;
    const style = {"layout":"vertical"};

    console.log(open)


    const dispatch = useDispatch();
    const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("https://restaurant-amostinanfon.vercel.app/api/orders", data);
      if (res.status === 201) {
          dispatch(reset());
         router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }


  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={undefined}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const shipping = details.purchase_units[0].shipping;
                        createOrder({
                          customer: shipping.name.full_name,
                          address: shipping.address.address_line_1,
                          total: cart.total,
                          method: 1
                        });
                    });
                }}
            />
        </>
    );
}

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
              cart.products.map((product, index) => (
                  <tr className={styles.tr} key={index}>
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
            <h2 className={styles.title}> COUT TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Sous-Total:</b>{cart.total} Fcfa
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>{cart.total} Fcfa
            </div>
            {open ? (
              <div className={styles.paymentMethods}>
                <button 
                  className={styles.payButton}
                  onClick={() =>setCash(true)}
                  >PAIEMENT EN CASH</button>
                <PayPalScriptProvider
                  options={{
                      "client-id": "AatQVE1AjD7d5A_sifeu2_lX7FwzqILJFbtVNxNW0F29tF4UVEMDv4N0WtfGWGwcZQDle8jMa4bkr-41",
                      components: "buttons",
                      currency: "EUR",
                      "disable-funding":"credit,card,p24",
                  }}
                >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={undefined}
                />
                </PayPalScriptProvider>
              </div>
            ):(
              <button 
                onClick={() =>setOpen(true)} 
                className={styles.button}
                >
                  PAYER MAINTENANT
              </button>
            )}  
          </div>
        </div>
        {cash && (
          <OrderDetail total={cart.total} createOrder={createOrder}/>
        )}
    </div>
  )
}


export default Cart;