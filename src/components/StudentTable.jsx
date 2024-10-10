// StudentTable.js
import React from "react";
import Table from "./Table"; // Ensure this points to your Table component
import StudentData from "./students/studentdata"; // Ensure this points to your StudentData component

const StudentTable = ({ students }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Optional: for vertical centering
        height: "100vh", // Optional: height of the container
      }}
    >
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthday</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          {students.map((student, index) => (
            <StudentData
              key={`${student.last_name}-${index}`}
              lastName={student.last_name}
              firstName={student.first_name}
              course={student.course}
              birthdate={student.birthdate}
              age={student.age}
            />
          ))}
        </Table.TBody>

        <Table.TFoot></Table.TFoot>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
