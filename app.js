const express = require('express');
const app = express();
console.log(__dirname)
app.get('/',(req,res)=>{ //cuando alguien llega a la raiz del sitio (/) y una funccion
    //res.send('Hola desde Express')// responde un string
   // res.json('Hola desde Express')// responde un json
   res.sendFile(__dirname + '/index.html')//entrega el archivo HTML
}) 
app.get('/autos',(req,res)=>{ //cuando alguien llega a la raiz del sitio (/) y una funccion
    res.send('Hola desde Express sección de autos!!')// responde un 
}) 
app.get('*',(req,res)=>{ //cuando alguien llega a la raiz del sitio (/) y una funccion
    //res.send('No encontrado')// responde un 
    res.status(400).send('No encontrado con 400')// responde un codigo 400
}) 
 
app.listen(3000,()=>console.log('Servidor Corriendo'));//express levanta un servidor.