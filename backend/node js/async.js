// const { log } = require("console");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>res.json())
// .then((data)=>console.log(data))



async function getData() {
    const data= await fetch("https://jsonplaceholder.typicode.com/posts/1")
    console.log(data);
    console.log("async function");
    
    
}
getData()