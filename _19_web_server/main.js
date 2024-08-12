const express = require('express'); //npm install express --save
const app = express();

//pages경로로 들어오는 요청에 대해서는 
//로컬 폴더 __dirname : main.js가 있는 폴더 위치
// __dirname + '/pages' 
app.use('/scripts',express.static(__dirname+'/scripts'));

app.listen(4000,()=>{
    console.log('4000번에 귀를 대고 듣기 시작했음');
})

//처리해주는 루틴들을 추가

app.get('/', (req,res) =>{
    console.log('루트에 대한 요청 들어왔음');
    res.sendFile(__dirname+'/pages/index.html');
});
app.get('/about', (req,res)=>{
    console.log('about에 대한 요청 들어왔음');
    res.sendFile(__dirname+'/pages/about.html');
})
app.get('/working', (req,res)=>{
    console.log('working에 대한 요청 들어왔음');
    res.sendFile(__dirname+'/pages/working.html');
})