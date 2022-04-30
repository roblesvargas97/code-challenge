const StudentsController = require("../../../lib/controllers/StudentsController");

describe("Test for StudentController getStudents", () => {

    test("1) getStudent should Return something ", () => {
        const students = StudentsController.getStudents();
        expect(students.length).not.toEqual(0);
    });

    test("2)getStudents shouldnt return The file does not exists ", ()=>{
        const students = StudentsController.getStudents();
        expect(students).not.toBe("The file does not exists.");
    });

});

describe("Test for StudentController getEmailsStudentsWithCertification", () => {

    test("1) getEmailsStudentsWithCertification should return something ", () => {
        const emailsStudents = StudentsController.getEmailsStudentsWithCertification();
        expect(emailsStudents.length).not.toEqual(0);
    });

});

describe("Test for StudentController getStudentsByCreditsGreater500 ", () => {

    test("1) getStudentsByCreditsGreater500 should return something ", () => {
        const studentsByCredits = StudentsController.getStudentsByCreditsGreater500();
        expect(studentsByCredits.length).not.toEqual(0);
    });

});