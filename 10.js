const fs = require('fs');
const path = require('path');
const co = require('co');
const thunkify = require('thunkify');
let readFile = thunkify(fs.readFile);

co(function *(){
    //有木有感觉像在写同步代码,@_@
    let test = yield readFile(path.join(__dirname,'a.md'));
    console.log(test.toString());
})