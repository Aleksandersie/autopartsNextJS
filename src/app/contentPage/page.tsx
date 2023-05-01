// "use client"
import { useSelector } from "react-redux"
import getPageText from "../../../lib/getPageText"
import language from "../../../lib/selector"
import { MAIN_HOST } from "../../../HOST"
import { useRouter } from "next/router";
import { store } from "../../../store";
import { useSearchParams } from 'next/navigation';

export default async function contentPage(){
    //const router = useRouter();
    // const {currentLanguage} = useSelector(state=>state.languageSliceReducer)

    // два разных поддомена на разные языковые сайты
    // указать на прямую серверный стейт 
    // формировать станицы через Нест 
    // смена локали через Некст 
    // положить в Т имя локали и использовать в запросе

    // const response = await fetch (`${MAIN_HOST}/api/page/getPageText?currentLanguage=${currentLanguage}`)
    // const data =  await response.json()
    
    // console.log("data is", data)
     
    //const lang = store.getState().languageSliceReducer.currentLanguage
   
    
    return (
        <div className="container">cont</div>
    )
}