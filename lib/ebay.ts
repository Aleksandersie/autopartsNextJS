import { ebayToken } from "./token"


export default async function getFromEbay(searchString:string){
    const response = await fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${searchString}&limit=10`,{
        headers:{Authorization:`Bearer ${ebayToken}`}
    })
    return response.json()
}