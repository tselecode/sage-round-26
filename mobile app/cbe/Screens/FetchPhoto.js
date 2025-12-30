import { useEffect } from "react"


export default function FetchPhoto(){
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((responce)=>responce.json())
    .then(data=>console.log(data))
    
})

    return
}