"use client";

import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useDebounce } from "../useDebounce/useDebounce"
import { useSearchItemQuery } from "../../store/api/searchApi"
import { Provider } from "react-redux"
import { store } from "../../store"
import { log } from "console";
import Link from "next/link";



export default function SearchInput(){
    const [searchValue, setSearchValue] = useState("")
    
    const debounceFn = useDebounce(searchValue)

    const response:any = useSearchItemQuery( {text:debounceFn, page:0})
    
   
    useEffect(()=>{
        console.log("res", response.data)
    }, [debounceFn])


    return (
        <>
        <div className={styles.inputWrapper}>
        <input className={styles.input} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <div className={styles.inputDropdown}>
            {response.data?.map((item:any)=>(
                <Link href={`/${item.title}`} key={item.id} >
                     <p >{item.title}</p>
                </Link> 
            ))}
        </div>
        </div>
        </>
        
    )

}

