import { log } from "console"
import { URLSearchParams } from "url"
import getFromEbay from "../../../lib/ebay"
import styles from "./itemStyles.module.css"
import Link from "next/link"

interface IItemDetails{
    params:{
        itemTitle: string
    }
}
interface IEbayResponse{
    total: number,
    itemSummaries: IEbay[]
}
interface IEbay{
    title: string
    image: {
        imageUrl:string
    }
    price: {
        value:string,
        currency: string
    },
    itemWebUrl: 'https://www.ebay.com/itm/174620891167?hash=item28a837581f:g:I4sAAOSwGmlgGE2U&amdata=enc%3AAQAIAAAA4Au3atrCWWH%2F3mOiWgFar8bwok6UoQzdN1fWYKV69Kz5QIU9q%2Bw0DpOPSKg4yCtYLe6JrfACUa9EYG0YopLNFM3da05%2BQ%2BzVPDjXQa29%2Bt9bI7OdjbKz63o%2BVYNxUEbIVCt4dmVx9gvavP%2BL%2BAdwV4xVLAVrug69L3Kvy%2Fa25DrIENnBQKTfLtDTGEiQv8ZLeyD8ct1wDGIvITQOoQVjhvmdjQlUs61%2FJpTlQJcYE7rhh8D02NdzvoSZq8Ehn0yxuKdOuWARN3tudbLYQkLA1gQnnL5VP%2FYp3bXH5%2FAnwRWv',
 
}

export default async function itemDetails({params:{itemTitle}}:IItemDetails){
    const response = await fetch (`http://localhost:5000/api/ebay-items/search?text=${itemTitle}&page=0`)
    const data = await response.json()

    const ebayData:IEbayResponse = await getFromEbay(itemTitle)
    
    console.log("ebay is", ebayData)
    return<> 
    <div className="container">
        <h2 className={styles.hTag}>Database response:</h2>
    {data.map(el=>(
        <div className={styles.wrapper}> 
            <div><img
            width={260} 
            src="https://mall.industry.siemens.com/mall/Images/Header/Siemens logo.png"></img></div>
            <div className={styles.right}>
                <div><h3>{el.title}</h3></div>
                <hr />
                <div>{el.info}</div>
                <hr />
                {/* <div>{el.child_category}</div> */}
            </div>
        </div>
    ))}
    <div className={styles.linkWrapper}>
        <Link href={"/"}>
            <h3>Back to main page</h3>
            </Link>
    </div>
    <h2 className={styles.hTag}>Ebay response:</h2>
    <div className={styles.ebayWrapper}>
        {ebayData.itemSummaries?.map(item=>(
            <div className={styles.ebayCard}>
                <div>{item.title}</div>
                <img src={item.image.imageUrl} alt="img" width={150} height={150} />
                <div>{item.price.value+" "+item.price.currency}</div>
            </div>
            
        ))}
    </div>
    </div>
   
    </>
}