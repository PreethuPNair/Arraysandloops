
let students = [
    { name: "Anu Mol", age: 20, department: "Computer Science", totalMarks: 85 },
    { name: "Parvathy", age: 22, department: "Mathematics", totalMarks: 78 },
    { name: "Gayathri", age: 21, department: "Physics", totalMarks: 90 },
    { name: "John", age: 20, department: "History", totalMarks: 50 },
    { name: "Samuel", age: 22, department: "English", totalMarks: 40 },
    { name: "Sreekutty", age: 21, department: "Malayalam", totalMarks: 60 },
  ];
  

  function displayStudents() {
    const tableBody = document.getElementById("student-list");
    tableBody.innerHTML = "";
  
    students.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.department}</td>
        <td>${student.totalMarks}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  
  function sortStudents() {
    const sortBy = document.getElementById("sort").value;
    students.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    displayStudents();
  }
  
  function filterTable() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchText) ||
      student.age.toString().includes(searchText) ||
      student.department.toLowerCase().includes(searchText) ||
      student.totalMarks.toString().includes(searchText)
    );
    displayFilteredStudents(filteredStudents);
  }
  

  function displayFilteredStudents(filteredStudents) {
    const tableBody = document.getElementById("student-list");
    tableBody.innerHTML = "";
  
    filteredStudents.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.department}</td>
        <td>${student.totalMarks}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
 
  function filterByMarks() {
    const minMarks = parseInt(document.getElementById("filter").value);
    const filteredStudents = students.filter(student =>
      student.totalMarks >= minMarks
    );
    displayFilteredStudents(filteredStudents);
  }
  
 
  displayStudents();
  