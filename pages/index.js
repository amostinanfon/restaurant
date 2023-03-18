import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import axios from 'axios';
import PizzaList from '../components/PizzaList';
import { useSelector } from 'react-redux';



export default function Home({pizzaList}) {

  // const state = useSelector(state => console.log(state.products));

  return (
    <div className={styles.container}>
      <Head>
        <title>RESTAURANT DE PIZZA DOUALA</title>
        <meta name="description" content="Meilleur PIZZA de DOUALA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/> 
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}


export const getServerSideProps = async () => {

    // Fetch data from external API
  const res = await axios.get("https://restaurant-lake-nine.vercel.app/api/products/");  

  // Pass data to the page via props
  return { 
    props: 
      { 
        pizzaList: res.data
      } 
  }

}









