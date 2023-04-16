import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'


interface searchParams{
    text:string,
    page: number
}

// export const searchApi = createApi({
//     reducerPath: "searchApi",
//     baseQuery:fetchBaseQuery({baseUrl:"http://130.61.209.4:8087"}),
//     endpoints: builder =>({
//         searchItem:builder.query<any,searchParams>({
//             query: (arg) => { 
//                 const {text,page} = arg
//                 return{
//                     url: "/api/product/find/search",
//                     params: {text,page}
//                 }  
//             }
            
//         })
//     })
// }) 

export const searchApi = createApi({
    reducerPath: "searchApi",
    baseQuery:fetchBaseQuery({baseUrl:" http://localhost:5000"}),
    endpoints: builder =>({
        searchItem:builder.query<any,searchParams>({
            query: (arg) => { 
                const {text,page} = arg
                return{
                    url: "/api/ebay-items/search",
                    params: {text}
                }  
            }
            
        })
    })
}) 

export const {useSearchItemQuery} = searchApi