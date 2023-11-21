'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [ApiData, setApiData] = useState(null);

  useEffect(() => {
    const animalsFetch = async() => {
      try {
        const data = await axios.get('api/animals')
        setApiData(data.data);
      } catch(e) {
        throw e;
      }
    };
    animalsFetch();
  }, []);

  return (
   <main>
      {
        ApiData ? (
          ApiData.map((animal) => {
            <div>
              <p>{animal.name}</p>
            </div>
          })
        ) : (
          <p>carregando...</p>
        )
      }
   </main>
  )
}
