function showLogMessage(msg){
    console.log(`메시지는 ${msg}`);
}
function showLogMessage2(msg){
    console.log(`두 번째 메시지는 ${msg}`);
}

const keyNum = 'r2jreidsngo5r';
module.exports.keyValue = keyNum;
module.exports.showLogMessage = showLogMessage;
module.exports.secondLog = showLogMessage2;        //외부 파일로 export