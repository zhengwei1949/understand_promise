const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
    if(err)throw err;
    fs.writeFile(path.join(__dirname,'b.md'),data,(err)=>{
        if(err){
            console.log('文件拷贝失败');
            return;
        }
        console.log('文件拷贝成功');
    })
})