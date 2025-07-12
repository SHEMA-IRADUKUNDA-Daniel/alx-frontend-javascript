interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Daniel",
  lastName: "SHEMA",
  age: 21,
  location: "Kigali",
};

const student2: Student = {
  firstName: "Gad",
  lastName: "ISHIMWE",
  age: 22,
  location: "Musanze",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.padding = "10px";
headerRow.appendChild(firstNameHeader);

const lastNameHeader = document.createElement("th");
lastNameHeader.textContent = "Last Name";
lastNameHeader.style.padding = "10px";
headerRow.appendChild(lastNameHeader);

const ageHeader = document.createElement("th");
ageHeader.textContent = "Age";
ageHeader.style.padding = "10px";
headerRow.appendChild(ageHeader);

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.padding = "10px";
headerRow.appendChild(locationHeader);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.style.textAlign = "center";
  firstNameCell.textContent = student.firstName;
  const lastNameCell = row.insertCell();
  lastNameCell.style.textAlign = "center";
  lastNameCell.textContent = student.lastName;
  const ageCell = row.insertCell();
  ageCell.style.textAlign = "center";
  ageCell.textContent = student.age.toString();
  const locationCell = row.insertCell();
  locationCell.style.textAlign = "center";
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
