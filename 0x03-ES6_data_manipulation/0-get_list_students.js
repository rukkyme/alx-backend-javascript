export default function getListStudents() {
  const arrayOfStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return arrayOfStudents;
}

const students = getListStudents();
console.log(students);

