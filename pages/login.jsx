import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Login.module.css";



const Login = () => {

const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);
const [error, setError] = useState(false);
const router = useRouter();


const handleClick = async () => {
    // try {
    //     await axios.post("https://restaurant-lake-nine.vercel.app/api/login",
    //         {
    //             username,
    //             password
    //         });
    //         router.push("/admin")
    // } catch (err) {
    //     setError(true);
    // }
    console.log(1);
}

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin DashBoard</h1>
            <input 
                placeholder="username"
                type="text"
                className={styles.input}
                onChange={(e) =>setUsername(e.target.value)}
            />
            <input 
                placeholder="password"
                type="password"
                className={styles.input}
                onChange={(e) =>setUsername(e.target.value)}
            />
            <button 
                onClick={handleClick} 
                className={styles.button}
            >
                Sign In
            </button>
            {error && <span className={styles.error}>Wrong Credentials</span>}
        </div>
    </div>
  )
}


export default Login;