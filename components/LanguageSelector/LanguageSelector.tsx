"use client"

import Link from "next/link"
import getPageText from "../../lib/getPageText"
import selector from "../../lib/selector"
import { languageSlice } from "../../store/languageSlice"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"

export default function LanguageSelector(params){

    

    const {currentLanguage} = useSelector(state=>state.languageSliceReducer)

     const dispath = useDispatch()
    async function setDE(){
        dispath(languageSlice.actions.setLanguage("DE"))
        const sel = selector("DE")
        const response = await getPageText(currentLanguage)
        console.log(response)
        console.log("selector is", sel)

    }
    async function setEN(){
        dispath(languageSlice.actions.setLanguage("EN"))
        const sel = selector("EN")
        const response = await getPageText(currentLanguage)
        console.log(response)
        console.log("selector is", sel)
    }
    async function get(){
       const response = await getPageText(currentLanguage)
       console.log(response)
    }
    return(
        <div className={styles.wrapper}>
            {/* <h3 onClick={setEN}>EN</h3>
            <h3 onClick={setDE}>DE</h3>
            <h3 onClick={get}>get</h3> */}

            <Link href="/" locale="en">
            <h3>EN</h3>
            </Link>

            <Link href="/" locale="de">
            <h3>DE</h3>
            </Link>
            <Link href="/lang" > 
            <h3>test</h3>
            </Link >
        </div>
    )
}