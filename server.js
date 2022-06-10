const express = require ("express")

const app= express()

app.get('/',function(req,res){
    // console.log(request)
    
    res.send("<img src='https://www.online-image-editor.com/online-image-editor-logo.png' width='500' height='600'>")

})

app.get('/contact',function(req,res){
    res.send("<h1>contact us on Gmail.com</h1>")
})


app.get('/Whats',function(req,res){
    res.send("<h1>Contact on whatsApp</h1>")
})

app.listen(3000,function(){
    console.log("app running successfully on port 3000")
})