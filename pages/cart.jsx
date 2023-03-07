import styles from "../styles/Cart.module.css";
import Image from 'next/image';
import { useDispatch , useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { 
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";



const Cart = () => {

    //  This values are the props in the UI 
  const [open, setOpen] = useState(false);
  const amount = "2";
  const currency = "USD";
  const style = {"layout":"vertical"};

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

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
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
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
            <h2 className={styles.title}> COUT TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Sous-Total:</b>{cart.total} Fcfa
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>{cart.total} Fcfa
            </div>
            {open ? (
              <div className={styles.paymentMethods}>
                <button className={styles.payButton}>PAIEMENT EN CASH</button>
                <PayPalScriptProvider
                  options={{
                      "client-id": "test",
                      components: "buttons",
                      currency: "undefined",
                      "disable-funding":"credit, card, p24",
                  }}
                >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={undefined}
                />
                </PayPalScriptProvider>
              </div>
            ):(
              <button onClick={() =>setOpen(true)} className={styles.button}>PAYER MAINTENANT</button>
            )}  
          </div>
        </div>
        <div className={styles.right}></div>
    </div>
  )
}


export default Cart;