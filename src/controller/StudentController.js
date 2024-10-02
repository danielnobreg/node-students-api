// here i start an array with a student pre-made 
let students = [
    {
    id: 1,
    name: "A",
    grade1: 7,
    grade2: 7,
    media: 7,
    situation: "Approved"
    },
];

class StudentController {
    // create function
    static create(request, response) {
        const {name, grade1, grade2} = request.body;
        if (grade1 <= -1) {
            response.status(400).json({
                message: "Provide a valid note"
            });
            return;
        }
        if (grade2 <= -1) {
            response.status(400).json({
                message: "Provide a valid note"
            });
            return;
        }
        let media = grade1+grade2;
        var situation;
        if (media>7) {
            var situation = "Approved";
        } else if (media >= 4 && media < 7) {
            var situation = "Recovery";
        } else {
            var situation = "Reproved";
        }
        if (media>10) {
            media = 10;
        }
        let student = {
            id: students.at(-1).id+1,
            name,
            grade1,
            grade2,
            media,
            situation,
        }
        students.push(student);
        response.status(201).json({students});
    }
    // read function
    static read(request, response) {
        response.status(200).json({students: students});
    }
    // read by id function
    static readById(request, response) {
    const {id} = request.params;
    const student = students.find((student) => student.id === parseInt(id));
    if (!student.id) {
        response.status(404).json({
            message: "Student not found!"
        });
        return;
    }
    response.status(200).json({student});
}
    // update function
    static update(request, response) {
    const {id} = request.params;
    const {name, grade1, grade2} = request.body;
    const idStudentFound = students.findIndex((student)=> student.id===parseInt(id));
    if (idStudentFound === -1) {
        response.status(404).json({
            message: "Student not found!"
        });
        return;
    }
    if (grade1 <= -1) {
        response.status(400).json({
            message: "Provide a valid note"
        });
        return;
    }
    if (grade2 <= -1) {
        response.status(400).json({
            message: "Provide a valid note"
        });
        return;
    }
    students[idStudentFound] = {id, name, grade1, grade2};
    response.status(201).json({
        student: students[idStudentFound]
    });
    }
    // deleting function
    static delete(request, response) {
    const {id} = request.params;
    const idStudentFound = students.findIndex((student)=>student.id===parseInt(id));
    if (idStudentFound == -1) {
        response.status(404).json({
            message: "Student not found!"
        });
        return;
    }
    students.splice(idStudentFound, 1);
    response.status(204).json({
        message: "Student deleted successfully"
    });
    }
}

export default StudentController; // exporting my controller to set up my routes