"use client"

import { log } from "console"
import { NextPage } from "next"
import Link from "next/link"
import styles from "./out.module.css"
//import Image from "next/image"

interface serverResponse{
  id:number,
  title:string,
  info:string
  image: string,
  child_category:string
}


interface IItemsList{
    list:serverResponse[]
}

export default function out({list}:IItemsList){

    // function click(item){
    //     console.log("id is",item.id)
    // }

    console.log(list)
    return (<>
    <div className={styles.cardArea}>
    {list.map(item=>(
    <div key={item.id} className={styles.cardBody} >
        <Link href={`/${item.title}`} >
        <h3>{item.title}</h3>
        </Link>
        {/* <Image width={150} height={200} src={item.image} alt="image"/> */}
        <img width={150} height={110} 
        style={{borderRadius:10}}
        src="data:image/png;base64,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"/>
        </div>
   ))}
    </div>
  
    </>)
}