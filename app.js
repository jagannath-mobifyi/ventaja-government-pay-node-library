const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config')

app.use(cors());
app.use(express.json());
app.use(require('./documentation/index'))




app.use('/', require('./routes'));

app.listen((process.env.PORT),(err)=>{
    if(err){
        throw err
    }else{
        console.log(`your app is running on PORT : ${process.env.PORT}\n------------------------------`);

        console.log(`api url: http://localhost:${process.env.PORT}`)
        console.log(`docs: http://localhost:${process.env.PORT}/docs`)
    }
})
