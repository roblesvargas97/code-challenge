const Reader = require("../utils/Reader");
const StudentsService = require("../services/StudentsService");

class StudentsController {

    static getStudents(){

        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return StudentsService.getStudents(students);

    }

    static getEmailsStudentsWithCertification(){

        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return StudentsService.getEmailsStudentsWithCertification(students);

    }

    static getStudentsByCreditsGreater500(){

        const students = Reader.readFile(process.cwd()+"/data/visualPartnershipStudents.json");
        return StudentsService.getStudentsByCreditsGreater500(students);

    }

}

module.exports = StudentsController;