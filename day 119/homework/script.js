function createStudentMap(students) {
    let studentMap = new Map();
    
    students.forEach(([name, score]) => {
        studentMap.set(name, score);
    });

    return studentMap;
}


const students = [
    ["Luka", 85],
    ["Anna", 90],
    ["David", 78],
    ["Nino", 95]
];

const studentMap = createStudentMap(students);
console.log(studentMap);