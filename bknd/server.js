const express =require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')



const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "deekshith",
    database : "restaurant"
})

app.use(express.json());
db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL database');
})
app.use(cors())
app.use('/api/users',require("./routes/users.js"))
app.use('/api/user/menu',require("./routes/Menu"))




  
app.listen(8081,()=>{
    console.log("listening")
})

