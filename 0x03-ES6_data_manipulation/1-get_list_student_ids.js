export default function getListStudentsIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }

  const studentsIds = arrayOfStudents.map((student) => student.id);

  return studentsIds;
}
