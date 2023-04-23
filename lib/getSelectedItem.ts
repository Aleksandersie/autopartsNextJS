export default async function getItems(){
    const response = await fetch ("http://91.201.55.182:5000/api/product/find/search/")
    return response.json()
}