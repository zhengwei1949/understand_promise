const path = require('path');
const fs = require('fs');
function logSuccess(data){
    console.log(data.toString());
}
function logErr(){
    console.log('文件读写失败');
}
fs.readFile(path.join(__dirname,'a.md'),(err,data)=>{
    if(err){
        logErr();
    }else{
        logSuccess();
    }
});