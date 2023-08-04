function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  // Use filter to get students located in the specific city
  const studentsInCity = studentsList.filter((student) => student.location === city);

  return studentsInCity;
}
