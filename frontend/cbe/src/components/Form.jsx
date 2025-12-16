import { useState,useEffect } from "react"

export default function Form() {
    const [name , setName] = useState()

    return<>
   <form >
    <label For="Name">name: </label>
    <input 
    type="text"
    id="name" 
    value={name}
    onChange={(e)=>{
        setName(e.target.value)
    }}
    />
    
    
    </form> 
   <h1>your name is: {name}</h1>
   
    </>
}