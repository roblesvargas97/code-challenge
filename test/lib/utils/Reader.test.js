const Reader = require("../../../lib/utils/Reader");

describe("test for reader", () => {

    test("1) Test read file shouldn't return The file does not exists ", () => {
        const functionReader = Reader.readFile(process.cwd()+"/test/data/visualPartnershipStudents.json");
        expect(functionReader).not.toBe("The file does not exists.");
    });

    test("2) Test read file should return The file does no exists" , ()=> {
        const functionReader = Reader.readFile(process.cwd()+"/test/data/thisFileDoesNotExists.json");
        expect(functionReader).toBe("The file does not exists.");
    });

});

