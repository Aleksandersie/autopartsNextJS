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
    itemWebUrl: string
}

export default async function itemDetails({params:{itemTitle}}:IItemDetails){
    const response = await fetch (`http://91.201.55.182:5000/api/ebay-items/search?text=${itemTitle}&page=0`)
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
            <Link href={item.itemWebUrl} target="blank">
            <div className={styles.ebayCard}>
                <div>{item.title}</div>
                <img src={item.image?.imageUrl} alt="img" width={150} height={150} style={{borderRadius:10}} />
                <div>{item.price.value+" "+item.price.currency}</div>
            </div>
            </Link>            
        ))}
    </div>
    </div>
   
    </>
}