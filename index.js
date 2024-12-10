const express = require('express')
const app = express()
const port = 3000

// import body parser
const bodyparser = require('body-parser')


// untuk cek website
 app.get('/', (req,res) =>{
    res.send('haloww untuk semua ren')
 })

// insert, edit delete
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


// import route posts
const postsRouter = require('./routes/posts')
// untuk menggunakan route post di express
app.use('/api/posts',postsRouter)



// ini untuk memanggil port / akses web
app.listen(port, ()=>{
    console.log(`aplikasi berjalan di http://localhost:${port}`)
})