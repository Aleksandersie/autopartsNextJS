import { log } from "console";
import { useEffect, useState } from "react";


export function useDebounce(searchValue:string, delay:number = 300):string{
    const [value, setValue] = useState(searchValue)

    useEffect(()=>{
        const timer = setTimeout(()=>setValue(searchValue), delay)
        return ()=> clearInterval(timer)
    }, [searchValue, delay])
    
    return value
}