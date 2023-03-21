import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import axios from 'axios';
import PizzaList from '../components/PizzaList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';



export default function Home({pizzaList, admin}) {

  const [close, setClone] = useState(true)


  return (
    <div className={styles.container}>
      <Head>
        <title>RESTAURANT DE PIZZA DOUALA</title>
        <meta name="description" content="Meilleur PIZZA de DOUALA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/> 
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}


export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;
 
 if (myCookie.token === process.env.TOKEN) {
  admin = true;
 }

    // Fetch data from external API
  const res = await axios.get("https://restaurant-amostinanfon.vercel.app/api/products/");  

  // Pass data to the page via props
  return { 
    props: 
      { 
        pizzaList: res.data,
        admin
      } 
  }

}









