const path = require('path');
const fs = require('fs');

let logPromise = new Promise((resolve,reject)=>{
    fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
        if(err){
            reject();
        }else{
            resolve(data);
        }
    });
});

logPromise.then((data)=>{
    console.log(data.toString());
},()=>{
    console.log('文件读写失败');
})