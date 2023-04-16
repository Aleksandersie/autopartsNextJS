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
        {item.title}
        </Link>
        {/* <Image width={150} height={200} src={item.image} alt="image"/> */}
        <img width={150} height={100} src="https://mall.industry.siemens.com/mall/Images/Header/Siemens logo.png"/>
        </div>
   ))}
    </div>
  
    </>)
}