import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
import { DEFAULT_MIN_BREAKPOINT } from "react-bootstrap/esm/ThemeProvider";

const StudentList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
  axios
  .get("http://localhost:3000/students/")
  .then(({ data }) => {
    setStudents(data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

const DataTable = () => {
  return students.map((res, i) => {
  return <StudentTableRow obj={res} key={i} />;
  });
};

return (
  <div className="table-wrapper">
  <Table striped bordered hover>
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Roll No</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>{DataTable()}</tbody>
  </Table>
  </div>
);
};

export default StudentList;