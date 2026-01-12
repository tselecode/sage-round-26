const fs = require('fs')

    fs.writeFile('output.txt','text from node.js !!',(err)=>{
        console.log(err);
        
    })
 


    fs.readFile('output.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log(data);
            
        }
    })

