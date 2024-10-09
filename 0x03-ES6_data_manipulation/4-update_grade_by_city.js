export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((student) => student.location === city);
  return newList.map((student) => {
    const studentGrade = newGrades.find(
      (gradeObj) => gradeObj.studentId === student.id,
    );
    return {
      ...student, // Copy all properties of the student
      grade: studentGrade ? studentGrade.grade : 'N/A', // Update or set default grade
    };
  });
}
