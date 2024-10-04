import React from "react";
import Table from "./Table";

const StudentTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Student Management System</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Last Name</Table.ColumnHeader>
            <Table.ColumnHeader colspan="2">First Name</Table.ColumnHeader>
            <Table.ColumnHeader colspan="2">Course</Table.ColumnHeader>
            <Table.ColumnHeader colspan="2">Birthday</Table.ColumnHeader>
            <Table.ColumnHeader colspan="2">Age</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>Pimentel</Table.Column>
            <Table.Column>Job Aaron</Table.Column>
            <Table.Column>IT</Table.Column>
            <Table.Column>2004/04/04</Table.Column>
            <Table.Column>20</Table.Column>
          </Table.Row>
        </Table.TBody>

        <Table.TFoot></Table.TFoot>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
