import React, { useState, useEffect } from "react";
import StudentTable from "./components/StudentTable"; // Ensure the path is correct
import SearchBar from "./components/students/searchbar"; // Ensure the path is correct

const students = [
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

  // Handle search bar input
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Handle Min Date Change
  const handleMinDateChange = (minDate) => {
    setMinDate(minDate);
  };

  // Handle Max Date Change
  const handleMaxDateChange = (maxDate) => {
    setMaxDate(maxDate);
  };

  // Apply filters whenever searchTerm, minDate, or maxDate changes
  React.useEffect(() => {
    filterStudents();
  }, [searchTerm, minDate, maxDate]);

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBar onSearch={handleSearch} />
      <DateFilter
        minDate={minDate}
        maxDate={maxDate}
        handleMinDateChange={handleMinDateChange}
        handleMaxDateChange={handleMaxDateChange}
      />
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default App;
