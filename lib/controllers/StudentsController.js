const Reader = require("../utils/Reader");
const StudentsService = require("../services/StudentsService");

class StudentsController {

    static getStudents(){
        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return StudentsService.getStudents();
    }

}

module.exports = StudentsController;