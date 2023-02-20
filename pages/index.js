import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import axios from 'axios';
import PizzaList from '../components/PizzaList';



export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RESTAURANT DE PIZZA DOUALA</title>
        <meta name="description" content="Meilleur PIZZA de DOUALA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3001/api/products");
//   console.log(res.data);
//   return {
//     props:{
//       pizzaList: res.data
//     }
//   }
// }

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://192.168.31.135:3000/api/products`) 
  const pizzaList = await res.json()

  console.log(pizzaList);

  // Pass data to the page via props
  return { props: { pizzaList } }
}









