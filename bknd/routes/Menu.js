const express = require('express');
const router =  express.Router();
const mysql=require('mysql')
 const db = mysql.createConnection({
    host : "localhost",
    user : "sqluser",
    password : "password",
    database : "restaurant"
 })

 router.post('/',(req,res)=>{

    const {food_id,food_name,food_description,food_price,quantity} = req.body
    const sql = `INSERT INTO fooditems VALUES ("${food_id}","${food_name}","${food_description}","${food_price}","${quantity}");`
        db.query(sql,(err,data)=>{
            try {
                res.json(data)
                
            } catch (error) {
                console.log(error)
            }
        })
    
})

router.get('/showmenu',(req,res)=>{
    try {
        const sql = "SELECT * FROM fooditems"
        db.query(sql , (err,data)=>{
            res.json(data)
        })
       // res.json(state)
    } catch (error) {
        res.status(404).json({error:"error"})
    }
})

router.post('/orders',(req,res)=>{
    const q = "SELECT MAX(order_id) as count FROM orders";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }

    const count = data[0].count;
    console.log(count)
        
        const{food_id,quantity} = req.body
        const sql = "INSERT INTO contains(order_id,food_id,quantity) VALUES(?,?,?)"
        db.query(sql ,[count,food_id,Number(quantity)], (err,data)=>{
            if(err){return res.status(404).json(err)}
            res.json(data)
        })
    })
   
})

router.post('/billamount',(req,res)=>{
       
    const q = "UPDATE orders SET order_amt";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }

    const count = data[0].count;
    console.log(count)
        
        const{food_id,quantity} = req.body
        const sql = "INSERT INTO contains(order_id,food_id,quantity) VALUES(?,?,?)"
        db.query(sql ,[count,food_id,Number(quantity)], (err,data)=>{
            if(err){return res.status(404).json(err)}
            res.json(data)
        })
    })
   
})
   
        
    
module.exports = router;