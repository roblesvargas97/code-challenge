const Reader = require("../utils/Reader");

class StudentsController {

    static getStudents(){
        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return students;
    }

}

module.exports = StudentsController;