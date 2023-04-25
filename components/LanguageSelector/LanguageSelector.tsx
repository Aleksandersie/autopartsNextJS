"use client"

import getPageText from "../../lib/getPageText"
import { languageSlice } from "../../store/languageSlice"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"

export default function LanguageSelector(){

    const {currentLanguage} = useSelector(state=>state.languageSliceReducer)

     const dispath = useDispatch()
    async function setDE(){
        dispath(languageSlice.actions.setLanguage("DE"))
        console.log(currentLanguage)
        const response = await getPageText(currentLanguage)
        console.log(response)

    }
    async function setEN(){
        dispath(languageSlice.actions.setLanguage("EN"))
        console.log(currentLanguage)
        const response = await getPageText(currentLanguage)
        console.log(response)
    }
    async function get(){
       const response = await getPageText(currentLanguage)
       console.log(response)
    }
    return(
        <div className={styles.wrapper}>
            <h3 onClick={setEN}>EN</h3>
            <h3 onClick={setDE}>DE</h3>
            <h3 onClick={get}>get</h3>
        </div>
    )
}