const Reader = require("../utils/Reader");

class StudentController {

    static getStudents(){
        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return students;
    }

}

module.exports = StudentController;