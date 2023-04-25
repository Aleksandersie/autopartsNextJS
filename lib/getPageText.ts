import { MAIN_HOST } from "../HOST"

export default async function getPageText(currentLanguage){
    //const response = await fetch (`${MAIN_HOST}/api/ebay-items/pageText/`+new URLSearchParams({currentLanguage:"DE"}))
    const response = await fetch (`${MAIN_HOST}/api/ebay-items/pageText?currentLanguage=${currentLanguage}`)
    console.log(response)
    return response.json()
}