import Link from 'next/link'
import './globals.css'
import styles from "./page.module.css"
import Providers from '../../../components/Provider/Provider'
import LanguageSelector from '../../../components/LanguageSelector/LanguageSelector'



// export const metadata = {
//   title: 'AutoParts24',
//   description: 'AutoParts24',
// }




// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

// export default function RootLayout({
//   children,
//   params: {
//     lng
//   }
// }) {
//   return (
//     <html lang={lng} dir={dir(lng)}>
//       <body>
//       <nav>
//         <div className='container'>
//           <div className={styles.navWrapper}>
//           <Link href={"/"}>Home</Link>
//           <Link href={"contentPage"}>Content</Link>
//           <Providers>
//           <LanguageSelector/>
//           </Providers>
          
//           </div>
//         </div>
        
//         </nav>
//         {children}</body>
//     </html>
//   )
// }

import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}