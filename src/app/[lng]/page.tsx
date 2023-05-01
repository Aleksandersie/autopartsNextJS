import { Inter } from 'next/font/google'


import styles from "./page.module.css"

import { Provider } from 'react-redux'


import Link from 'next/link'
import getItems from '../../../lib/getItems'
import Providers from '../../../components/Provider/Provider'
import SearchInput from '../../../components/Input/SearchInput'
import Out from '../../../components/Out'
import { Footer } from './components/Footer'



const inter = Inter({ subsets: ['latin'] })

interface serverResponse{
  id:number,
  title:string,
  info:string
}


export default async function Home({ params: { lng } }) {

  const data: any = await getItems()

  return (
    <main className="container"> 
     
      <div className={styles.title}>AUTOMPARTS24</div>
      <hr />
      <Footer lng={lng}/>
      <Link href={`/${lng}/second-page`}>
        second page
      </Link>
      <Providers>
      <SearchInput />
      </Providers>
      <Out list={data}/>
    </main>
  )
}
