
import React from "react";
import Header from "../components/header/Header";
import Employee from "../components/Employee/Employee";
import Table from "../components/Table/Table";

type Employee = {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
};

const EmployeeTable: React.FC = () => {
  return (
    <>
      <Header />
      <Employee />
      <Table />
    </>
  );
};

export default EmployeeTable;
