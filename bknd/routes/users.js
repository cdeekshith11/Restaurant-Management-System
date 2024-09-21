const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "restaurant",
});

router.post("/createuser", async (req, res) => {
  const q = "SELECT COUNT(*) as count FROM Customer";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }

    const count = data[0].count;
    const { cust_name, cust_email, cust_password, cust_address } = req.body;

    const sql =
      "INSERT INTO Customer(cust_id,cust_name,cust_email,cust_password,cust_address) VALUES (?,?,?,?,?)";
    const values = [count, cust_name, cust_email, cust_password, cust_address];

    db.query(sql, values, (err, data) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.json({ success: "successfully inserted", data });
    });
  });
});

router.get("/user", (req, res) => {
  try {
    const sql = "SELECT * FROM Customer";
    db.query(sql, (err, data) => {
      res.json(data);
    });
    // res.json(state)
  } catch (error) {
    res.status(404).json({ error: "error" });
  }
});

router.post("/user/:id", (req, res) => {
  const id = req.params.id;
  const Id = Number(id);
  const q = "SELECT MAX(order_id) as count FROM orders";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }

    const count = data[0].count+1;
    let curdate = new Date();
    let day = curdate.getDate();
    let month = curdate.getMonth();
    let year = curdate.getFullYear();
    let o_date = `${day}-${month}-${year}`;

    try {
      const sql = `INSERT INTO orders(order_id,cust_id,order_date) VALUES(?,?,?)`;
      db.query(sql, [count, Id, o_date], (err, data) => {
        if (err) {
          return res.json(err);
        }
        res.json(data);
      });
      // res.json(state)
    } catch (error) {
      res.status(404).json({ error: "error" });
    }
  });
});
router.post("/login", (req, res) => {
  const { cust_email, cust_password } = req.body;
  const q =
    "SELECT COUNT(*) as count FROM Customer WHERE cust_email=? AND cust_password=?";
  db.query(q, [cust_email, cust_password], (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    const count = data[0].count;
    if (count === 0) {
      return res.json({ error: "Not found" });
    }

    const sql =
      "SELECT * FROM Customer WHERE cust_email=(?) and cust_password=(?)";
    const values = [cust_email, cust_password];
    db.query(sql, values, (err, data) => {
      if (err) return res.status(400).json(err);
      return res.json(data);
    });
  });
});

router.get("/yourorders/:id", (req, res) => {
  
    const q = "SELECT MAX(order_id) as count FROM orders";
    db.query(q, (err, data) => {
      if (err) {
        return res.status(400).json(err);
      }
  
      const count = data[0].count;
   
    const sql = "SELECT * FROM fooditems WHERE food_id IN (SELECT food_id FROM contains WHERE order_id =(?))";
    db.query(sql,[count], (err, data) => {
      if(err) return res.status(404).json({err})
      res.json(data);
    });
    // res.json(state)
  })

})

router.delete("/delete/:food_id",(req,res)=>{
  const id = req.params.food_id;
  const q = "SELECT MAX(order_id) as count FROM orders";
    db.query(q, (err, data) => {
      if (err) {
        return res.status(400).json(err);
      }
  
      const count = data[0].count;

      const sql = "DELETE FROM contains WHERE order_id=(?) AND food_id=(?)" 
      db.query(sql,[count,id],(err,data)=>{
        if(err) return res.status(400).json({err})
        res.json({Alert :"Item Removed"})
      })
    })
})


router.get("/bill",(req,res)=>{
  const q = "SELECT MAX(order_id) as count FROM orders";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }

    const count = data[0].count;
    //console.log(count)

    const sql = "SELECT quantity FROM contains WHERE order_id=(?)" 
    db.query(sql,[count],(err,data1)=>{
      if(err) return res.status(400).json({err})

    const sql2 = "SELECT * FROM fooditems WHERE food_id IN (SELECT food_id FROM contains WHERE order_id=(?))"
    db.query(sql2,[count],(err,data)=>{
      if(err) return res.status(400).json({err})
        data.quantity = data1.quantity
        res.json({data1,data})
    })
    })
  })

})

module.exports = router;
