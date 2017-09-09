const path = require('path');
const fs = require('fs');

let logPromiseFn = function(){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
            if(err){
                reject();
            }else{
                resolve(data);
            }
        });
    });
}

let fn = async function(){
    let data = await logPromiseFn();
    console.log(data.toString());
}

fn();