const express = require("express");
const StudentsController = require("./controllers/StudentsController");
const app = express();
const port = 3000;

app.get("/v1/students/" , (req,res) => {

    try {
        const getAllStudens = StudentsController.getStudents();
        res.status(200).json(getAllStudens);
    } catch (error) {
        res.status(404).json({error: error.message});
    }

});

app.get("/v1/students/emails" , (req,res) => {

    try {
        const getStudentsByEmail = StudentsController.getEmailsStudentsWithCertification();
        res.status(200).json(getStudentsByEmail);
    } catch (error) {
        res.status(404).json({error: error.message});
    }

});

app.get("/v1/students/credits" , (req,res) => {

    try {
        const getStudentsByCredits = StudentsController.getStudentsByCreditsGreater500();
        res.status(200).json(getStudentsByCredits);
    } catch (error) {
        res.status(404).json({error: error.message});
    }

});

app.listen(port , () => {
    console.log("App running in port:" + port );
});