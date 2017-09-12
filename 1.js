console.log('定时器开始');
function myTime(callback){
    setTimeout(()=>{
        console.log('定时器进行中');
        endTimer();
    },1000);    
}
function endTimer(){
    console.log('定时器结束');
}
myTime(endTimer);


