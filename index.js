const express = require("express")
const app = express()
const mysql = require("mysql")

// Conexão com o mysql
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "store"
})

app.use(express.json())

app.post("/createProduct", (req, res) => {

    const {nome} = req.body;
    const {qtd} = req.body;
    const {descr} = req.body; 

    let mysql = "INSERT INTO produtos (nome, qtd, descr) VALUES (?,?,?)";

    db.query(mysql, [nome, qtd, descr], (err, result) => {
        res.send(result);
    })

})

app.get("/getAllProducts", (req,res)=> {

    let mysql = "SELECT * FROM produtos";
    db.query(mysql, (err, result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    })
})

app.get("/getOneProduct/:nome", (req,res)=> {

    const {nome} = req.params;

    let mysql = "SELECT * FROM produtos WHERE nome = ?";


    db.query(mysql, [nome], (err, result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    })
})

app.put("/updateProduct/:id", (req, res) => {
    const { id } = req.params;
    const {nome} = req.body;
    const {qtd} = req.body;
    const {descr} = req.body;
    
    let mysql = "UPDATE produtos SET nome = ?, qtd = ?, descr = ? WHERE id_produto = ?";
    db.query(mysql, [nome, qtd, descr, id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

app.delete("/deleteProduct/:id", (req, res) => {

    const { id } = req.params;

    let mysql = "DELETE FROM produtos WHERE id_produto = ?";

    db.query(mysql, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.listen(3001, ()=> {
    console.log("server on!!!")
})