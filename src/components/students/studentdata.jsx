import React from "react";
import Table from "../Table";

const StudentData = ({ lastName, firstName, course, birthdate }) => {
  return (
    <Table.Row>
      <Table.Column>{lastName}</Table.Column>
      <Table.Column>{firstName}</Table.Column>
      <Table.Column>{course}</Table.Column>
      <Table.Column>{birthdate}</Table.Column>
    </Table.Row>
  );
};

export default StudentData;
