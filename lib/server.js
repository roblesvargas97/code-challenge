const express = require("express");
const StudentsController = require("./controllers/StudentsController");
const app = express();
const port = 3000;

app.get("/v1/students/" , (req,res) => {
    const getAllStudens = StudentsController.getStudents();
    res.status(200).json(getAllStudens);
});

app.listen(port , () => {
    console.log("App running in port:" + port );
});