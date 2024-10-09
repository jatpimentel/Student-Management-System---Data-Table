import React, { useState, useEffect } from "react";
import StudentTable from "./components/StudentTable"; // Ensure the path is correct
import SearchBar from "./components/students/searchbar"; // Ensure the path is correct

// Function to calculate age based on birthdate
const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

// Initialize the students data with calculated ages
const studentsData = [
  {
    last_name: "Pimentel",
    first_name: "Job Aaron",
    course: "IT",
    birthdate: "2004/04/04",
    age: calculateAge("2004/04/04"),
  },
  {
    last_name: "Veneracion",
    first_name: "Isiah Gilmore",
    course: "IT",
    birthdate: "1999/09/10",
    age: calculateAge("1999/09/10"),
  },
  {
    last_name: "Santos",
    first_name: "Elaijah Nathaniel",
    course: "IS",
    birthdate: "2002/09/10",
    age: calculateAge("2002/09/10"),
  },
  {
    last_name: "Thursday",
    first_name: "Benjamin",
    course: "CS",
    birthdate: "2003/09/10",
    age: calculateAge("2003/09/10"),
  },
];

function App() {
  const [students, setStudents] = useState(studentsData);
  const [filteredStudents, setFilteredStudents] = useState(studentsData);

  // Filter students based on search term
  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = students.filter(
      (student) =>
        student.first_name.toLowerCase().includes(lowercasedTerm) ||
        student.last_name.toLowerCase().includes(lowercasedTerm) ||
        student.course.toLowerCase().includes(lowercasedTerm) ||
        student.age.toString().includes(lowercasedTerm)
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
