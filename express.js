
const express = require('express')
const app = express()
const port = 3000
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shiblasharif:poly123@cluster0.03srr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err)
    {
        console.log("db connection error");
    }
    else{
        console.log("db connected");
    }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();
});



app.get('/', (req, res) => {
    client.db("blah").collection("devices").insertOne({key:"value"});
  res.send('Hello World!')

})

app.get('/submit',(req,res) => {
    res.send('get submit')
})
app.post('/submit',(req,res) => {
    console.log(req.body);
    console.log(req.body.username);
    res.send('get submit')
})


app.get('/login',(req,res) => {
    res.send('login')
})
app.get('/signup',(req,res) => {
    res.send('signup')
})
app.get('/forget',(req,res) => {
    res.send('forget')
})

app.get('/logout',(req,res) => {
    res.send('logout')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






