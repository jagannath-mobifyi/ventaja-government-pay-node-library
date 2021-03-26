const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config')
const {SignService} = require('./ventaja-nodejs-library');

const options = {
    certificatePath: "server.key",
    ventajaUrl: "https://demo.pinoypay.com/ventajaapi-v4/api/",
    id: "131191900001",
    uid: "teller",
    pwd: "p@ssw0rD",
    countryCode: "PH"
}
const service = new SignService(options);

app.use(cors());
app.use(express.json());
app.use(require('./documentation/index'))

// const Controller = require("./controllers");
// Router.route(Controller, service)
// app.use("/", )
// app.post('/philhealth/contribution/validate', async(req,res)=>{
//     try {
//         const result = await service.healthServide.validatePhilHealthPayment(req.body)
//         if(result.status == 200){
//             return res.json(result)
//         }else{
//             return res.status(result.status).send(result)
//         }
        
//     } catch (error) {
//         console.log('API error', error)
//         res.status(error.status || 500).send(error)
//     }
// })

app.use('/',(req, res, next)=>{
    req.service = service;
    next()
}, require('./routes'))

app.listen((process.env.PORT),(err)=>{
    if(err){
        throw err
    }else{
        console.log(`your app is running on PORT : ${process.env.PORT}\n------------------------------`);

        console.log(`api url: http://localhost:${process.env.PORT}`)
        console.log(`docs: http://localhost:${process.env.PORT}/docs`)
    }
})
