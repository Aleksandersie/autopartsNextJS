import Link from 'next/link'
import { MAIN_HOST } from '../../../../HOST'

export default async function Page({ params: { lng } }) {
    const response = await fetch (`${MAIN_HOST}/api/page/getPageText?currentLanguage=${lng}`,{ cache: 'force-cache' })
    const data =  await response.json()
    
    console.log(data)
    return (
    
    <>
    <div className='container'>
    <h1>Hi from second pagefff!</h1>
      <h1>lan is {lng}</h1>  
      <Link href={`/${lng}`}>
        back
      </Link>
      <div>{data.text}</div>
    </div>
      
    </>
  )
}