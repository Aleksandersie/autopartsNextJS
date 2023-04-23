import { Inter } from 'next/font/google'

import Out from '../../components/Out'
import getItems from '../../lib/getItems'
import styles from "./page.module.css"
import SearchInput from '../../components/Input/SearchInput'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Providers from '../../components/Provider/Provider'


const inter = Inter({ subsets: ['latin'] })

interface serverResponse{
  id:number,
  title:string,
  info:string
}


export default async function Home() {

  const data: any = await getItems()

  return (
    <main className="container">
      <div className={styles.title}>AUTOMPARTS24</div>
      <hr />
      <Providers>
      <SearchInput />
      </Providers>
      <Out list={data}/>
    </main>
  )
}
