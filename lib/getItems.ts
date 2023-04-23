export default async function getItems(){
    const response = await fetch ("http://91.201.55.182:5000/api/ebay-items/getAllItems")
    return response.json()
}