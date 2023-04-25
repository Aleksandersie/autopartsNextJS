import Link from 'next/link'
import './globals.css'
import styles from "./page.module.css"
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector'
import Providers from '../../components/Provider/Provider'

export const metadata = {
  title: 'AutoParts24',
  description: 'AutoParts24',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body>
      <nav>
        <div className='container'>
          <div className={styles.navWrapper}>
          <Link href={"/"}>Home</Link>
          <Link href={"contentPage"}>Content</Link>
          <Providers>
          <LanguageSelector/>
          </Providers>
          
          </div>
        </div>
        
        </nav>
        {children}</body>
    </html>
  )
}
