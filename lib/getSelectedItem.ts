export default async function getItems(){
    const response = await fetch ("http://130.61.209.4:8087/api/product/find/search/")
    return response.json()
}