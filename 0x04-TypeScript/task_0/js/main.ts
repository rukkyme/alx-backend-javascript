//Step 1: Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

    // Step 2: Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles"
};

    // Step 3: Create the array studentsList
const studentsList: Student[] = [student1, student2];

    // Step 4: Render the table
const tableBody = document.querySelector("#studentTable tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
}
