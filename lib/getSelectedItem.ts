import { MAIN_HOST } from "../HOST"

export default async function getItems(){
    const response = await fetch (`${MAIN_HOST}/api/product/find/search/`)
    return response.json()
}