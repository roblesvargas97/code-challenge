const StudentController = require("../../../lib/controllers/StudentController");

describe("Test for StudentController", () => {

    test("1) getStudent should Return something ", () => {
        const students = StudentController.getStudents();
        expect(students.length).not.toEqual(0);
    });



});