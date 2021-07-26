const BaseDB = require('dbd.db')
const DB = BaseDB('database')
const Collection = DB.collection({
	name: "Collection",
	ttl: 5 //optional
})
const express = require('express')
const app = express()
const port = 3000
    
app.get('/add/:opinion', (req, res) => {
    var id = new Date().getTime();
    var timestamp = new Date().toISOString();
    var opinion = req.params.opinion
    console.log(opinion, timestamp)
        // console.log(req.params.opinion);
        ;(async () => {
            await Collection.set({
            id: id,
            timestamp: timestamp,
            opinion: opinion
        })
    
        console.log(await Collection.find({
            opinion: "Hi"
        }))
    })()
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
  })