const express = require("express");
const StudentController = require("./controllers/StudentController");
const app = express();
const port = 3000;

app.get("/v1/students/" , (req,res) => {
    const getAllStudens = StudentController.getStudents();
    res.status(200).json(getAllStudens);
});

app.listen(port , () => {
    console.log("App running in port:" + port );
});