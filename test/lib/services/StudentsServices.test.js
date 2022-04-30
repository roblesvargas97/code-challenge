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