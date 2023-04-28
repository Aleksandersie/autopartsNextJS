"use client"
import { useSelector } from "react-redux"
import getPageText from "../../../lib/getPageText"
import language from "../../../lib/selector"
import { MAIN_HOST } from "../../../HOST"

export default async function contentPage(){
    const {currentLanguage} = useSelector(state=>state.languageSliceReducer)

    // два разных поддомена на разные языковые сайты
    // указать на прямую серверный стейт 
    // формировать станицы через Нест 
    // смена локали через Некст 

    const response = await fetch (`${MAIN_HOST}/api/page/getPageText?currentLanguage=${currentLanguage}`)
    const data =  await response.json()
    
    console.log("data is", data)
     

    return (
        <div className="container">{data.text}</div>
    )
}