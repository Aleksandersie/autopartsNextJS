import { MAIN_HOST } from "../HOST"

export default async function getPageText(currentLanguage:string){
    //const response = await fetch (`${MAIN_HOST}/api/ebay-items/pageText/`+new URLSearchParams({currentLanguage:"DE"}))
    
    const response = await fetch (`${MAIN_HOST}/api/page/getPageText?currentLanguage=${currentLanguage}`)
    return response.json()
}