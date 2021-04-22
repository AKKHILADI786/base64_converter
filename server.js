const express=require('express')
const app=express()

app.use('/',express.static(__dirname+'/public'))

const PORT=process.env.PORT|4444

app.listen(PORT,()=>{
    console.log(`server host on http://localhost:${PORT}`)
})