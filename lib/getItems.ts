export default async function getItems(){
    const response = await fetch ("http://localhost:5000/api/ebay-items/getAllItems")
    return response.json()
}