import Link from "next/link"

export default function test({params}){
    console.log(params)
    return(
        <div className="container">test
        <div>{params.locale}</div>
        <Link href={"/lang"} locale="de" target="blank">test</Link>
        </div>
    )
}