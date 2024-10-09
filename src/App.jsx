import React, { useState } from "react";
import StudentTable from "./components/StudentTable"; // Ensure the path is correct
import SearchBar from "./components/students/searchbar"; // Ensure the path is correct

const students = [
  {
    last_name: "Pimentel",
    first_name: "Job Aaron",
    course: "IT",
    birthdate: "2004/04/04",
    age: "",
  },
  {
    last_name: "Veneracion",
    first_name: "Isiah Gilmore",
    course: "IT",
    birthdate: "1999/09/10",
    age: "",
  },
  {
    last_name: "Santos",
    first_name: "Elaijah Nathaniel",
    course: "IS",
    birthdate: "2002/09/10",
    age: "",
  },
  {
    last_name: "Thursday",
    first_name: "Benjamin",
    course: "CS",
    birthdate: "2003/09/10",
    age: "",
  },
];

function App() {
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = students.filter((student) =>
      student.first_name.toLowerCase().includes(lowercasedTerm) ||
      student.last_name.toLowerCase().includes(lowercasedTerm) ||
      student.course.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredStudents(filtered);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBar onSearch={handleSearch} />
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default App;

