console.log('定时器开始');
function endTimer(){
    console.log('定时器结束');
}
setTimeout(()=>{
    console.log('定时器进行中');
    endTimer();
},1000);
