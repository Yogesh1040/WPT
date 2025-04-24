require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connection = require(`./sql`);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende:true}));



app.get("/",(req,res,next)=>{
    res.send("Hi");
});

app.get("/employee",(req,res,next)=>{
    connection.query(`SELECT * FROM employee`,(error,result)=>{
        if (error) throw error;
        res.json(result);
    });
});

app.get("/employee/:id",(req,res,next)=>{
    connection.query(`SELECT * FROM employee WHERE id = ${req.params.id}`,(error,result)=>{
        if (error) throw error;
        res.json(result);
    });
});

app.post("/employee",(req,res,next)=>{
    const sqlquery = `INSERT INTO employee (fname,lname,department,salary) VALUES (?,?,?,?)`;
    const [fname,lname,department,salary] = req.body;
    connection.query(sqlquery,[fname,lname,department,salary],(error,result)=>{
        if (error) throw error;
        res.json("Employee Details Added Successfully");
    });
});

app.put("/employee/:id",(req,res,next)=>{
    const sqlquery = `UPDATE employee SET fname=?, lname=?, department=?, salary=? WHERE id = ${req.params.id}`;
    const [fname,lname,department,salary] = req.body;
    connection.query(sqlquery,[fname,lname,department,salary],(error,result)=>{
        if (error) throw error;
        res.json(`Employee with id ${req.params.id} Updated Successfully`);
    });
});

app.delete("/employee/:id",(req,res,next)=>{
    connection.query(`DELETE FROM employee WHERE id = ${req.params.id}`,(error,result)=>{
        if (error) throw error;
        res.json(`Employee with id ${req.params.id} Deleted Successfully`);
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server Started on ${process.env.HOST} : ${process.env.PORT}`);
});