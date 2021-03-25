const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())//para poder receber dados
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.render('../views')
})

app.get('/login', (req,res)=>{
    res.render(__dirname + '/views')
})

app.post('/login', (req, res) =>{

    let username = req.body.username;
    let password = req.body.password

    res.send(`Username: ${username} Password: ${password}`)
})





app.listen(8181, ()=>{
    console.log('Funcionando')
})