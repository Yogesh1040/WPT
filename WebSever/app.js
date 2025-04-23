require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

const staticPath = path.join(__dirname,"/public");
const viewPath = path.join(__dirname,"/templates/views");
const partialPath = path.join(__dirname,"/templates/partials");

app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

app.get("/home",(req,res,next)=>{
    res.render("index",{
        Title : "Home",
        Company : "H"
    });
});

app.get("/about",(req,res,next)=>{
    res.render("about",{
        Title : "About",
        Company : "A"
    });
});

app.get("/service",(req,res,next)=>{
    res.render("service",{
        Title : "Service",
        Company : "S"
    });
});

app.get("/contact",(req,res,next)=>{
    res.render("contact",{
        Title : "Contact",
        Company : "CON"
    });
});

app.get("*d",(req,res,next)=>{
    res.render("404",{});
});

app.listen(port,()=>{
    console.log(`Server Started on ${host} : ${port}`);
});