import { MAIN_HOST } from "../HOST";

export default async function getItems(){
    const response = await fetch (`${MAIN_HOST}/api/ebay-items/getAllItems`)
    return response.json()
}