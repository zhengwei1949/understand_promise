const fs = require('fs');
const path = require('path');
let readPromise = new Promise((resolve,reject)=>{
    fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
        if(err){
            reject();
        }else{
            resolve(data);
        }
    })
})

let writePromiseFn = (data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(path.join(__dirname,'b.md'),data,(err)=>{
            if(err){
                reject();
            }else{
                resolve();
            }
        })
    })
}


readPromise.then((data)=>{
    writePromiseFn(data).then(()=>{
        console.log('文件拷贝成功');
    })
})