const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
    if(err){
        console.log('文件读写失败');
    }else{
        console.log(data.toString());
    }
});