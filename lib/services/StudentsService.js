class StudentsServices {

    static getStudents(students){

        if(students === "The file does not exists."){
            throw new Error(students);
        }else{
            return students;
        }

    }

    static getEmailsStudentsWithCertification(students){

        const allStudents = this.getStudents(students);
        const filterStudentsByEmail = allStudents.filter(student => student.haveCertification );
        const emailsStudents = filterStudentsByEmail.map(student => student.email);
        return emailsStudents;

    }

    static getStudentsByCreditsGreater500(students){

        const allStudents = this.getStudents(students);
        const filterStudentsByCreditsGreater500 = allStudents.filter(student => student.credits>500);
        return filterStudentsByCreditsGreater500;


    }

}

module.exports = StudentsServices;