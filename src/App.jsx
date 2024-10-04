import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentTable from "./components/StudentTable";

const students = [
  //Students Data
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
];

function App() {
  return <StudentTable></StudentTable>;
}

export default App;
