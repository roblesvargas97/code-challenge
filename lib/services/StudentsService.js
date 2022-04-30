class StudentsServices {

    static getStudents(students){

        if(students === "The file does not exists."){
            throw new Error(students);
        }else{
            return students;
        }

    }

}

module.exports = StudentsServices;