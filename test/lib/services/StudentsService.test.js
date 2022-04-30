const StudentsServices = require("../../../lib/services/StudentsService");
const Reader = require("../../../lib/utils/Reader");

describe("Test for StudentsServices getStudents", () => {

    test("1) getStudent.lenght should be greater than 0", () => {

        const students = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        const allStudents = StudentsServices.getStudents(students);
        expect(allStudents.length).not.toBe(0);

    });

    test("2) getStudent should be error 'The file does not exists.'  ", () => {

        try {
            const students = Reader.readFile(process.cwd()+"/test/data/thisFileDoesNotExist.json");
            StudentsServices.getStudents(students);
        } catch (error) {
            expect(error.message).toBe("The file does not exists.");
        }

    });

});

describe("Test for StudentsService getEmailsStudentsWithCertification", () => {

    test("1) getEmailsStudentsWithCertification.lenght should be greater than 0", () => {

        const students = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        const emailsStudents = StudentsServices.getEmailsStudentsWithCertification(students);
        expect(emailsStudents.length).not.toBe(0);

    });

    test("2) getEmailsStudentsWithCertification returned array every student need to have certification", () => {

        const students = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        const filterStudentsByEmail = students.filter(student => student.haveCertification === true);
        filterStudentsByEmail.forEach(student => expect(student.haveCertification).toBeTruthy());
        const emailsStudents = StudentsServices.getEmailsStudentsWithCertification(students);
        expect(filterStudentsByEmail.length).toBe(emailsStudents.length);

    });
});

describe(" Test for StudentsService getStudentsByCoinsGreater500", () => {

    test("1) getStudentsByCreditsGreater500.lenght should be greater than 0", () => {

        const students = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        const studentsCreditsGreater500 = StudentsServices.getStudentsByCreditsGreater500(students);
        expect(studentsCreditsGreater500.length).not.toBe(0);

    });

    test("2) getStudentsByCreditsGreater500 returned array every student need to have coins greater 500", () => {

        const students = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        const studentsCreditsGreater500 = StudentsServices.getStudentsByCreditsGreater500(students);
        studentsCreditsGreater500.forEach(student => expect(student.credits).toBeGreaterThan(500));

    });

});