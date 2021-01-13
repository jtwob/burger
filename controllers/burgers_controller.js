const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res)=>{
    burger.selectAll((results)=>{
        let obj = {
            burgers: results
        };
        res.render("index", obj);
    });
});

router.post("/burgers", (req, res)=>{
    burger.insertOne(req.body.burger_name, ()=>{
        res.redirect("/");
    });
});

router.post("/burgers/:id", (req, res)=>{
    burger.updateOne(req.params.id, ()=>{
        res.redirect("/");
    });
});

module.exports = router;