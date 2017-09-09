console.log('定时器开始');
var timerPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('定时器进行中');
        resolve();
    },1000);
})

timerPromise.then(()=>{
    console.log('定时器结束');
})