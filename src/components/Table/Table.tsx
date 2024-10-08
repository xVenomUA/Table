import React, { useState } from "react";
import scss from "./Table.module.scss";
import BusketIcon from "../icons/BusketIcon";
import EditIcon from "../icons/EditIcon";
import ArrowBottomIcon from "../icons/ArrowBottomIcon";
import ArrowTopIcon from "../icons/ArrowTopIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  editEmployee,
  selectEmployees,
  selectFilter,
} from "../../redux/TableData/TableData";

type Employee = {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  avatar: string;
};

const Table: React.FC = () => {
  const [activeColumn, setActiveColumn] = useState<keyof Employee | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [editData, setEditData] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(selectEmployees);
  const filter = useSelector(selectFilter);

  const handleSort = (column: keyof Employee) => {
    setActiveColumn(column);
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  const filteredData = data.filter(
    (employee: Employee) =>
      employee.name.toLowerCase().includes(filter.toLowerCase()) ||
      employee.email.toLowerCase().includes(filter.toLowerCase()) ||
      employee.status.toLowerCase().includes(filter.toLowerCase()) ||
      employee.role.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a: Employee, b: Employee) => {
    if (!activeColumn) return 0;
    if (sortDirection === "asc") {
      return typeof a[activeColumn] === "string"
        ? (a[activeColumn] as string).localeCompare(b[activeColumn] as string)
        : (a[activeColumn] as number) - (b[activeColumn] as number);
    } else {
      return typeof a[activeColumn] === "string"
        ? (b[activeColumn] as string).localeCompare(a[activeColumn] as string)
        : (b[activeColumn] as number) - (a[activeColumn] as number);
    }
  });

  const onDelete = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  const onEdit = (employee: Employee) => {
    setEditData(employee);
    setIsModalOpen(true);
  };

  const saveEdit = (updatedEmployee: Employee) => {
    dispatch(editEmployee(updatedEmployee));
    setIsModalOpen(false);
  };

  return (
    <div className={scss.tableContainer}>
      <table className={scss.employeeTable}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              <span>Name</span>
              {activeColumn === "name" ? (
                sortDirection === "asc" ? (
                  <ArrowTopIcon />
                ) : (
                  <ArrowBottomIcon />
                )
              ) : (
                <ArrowBottomIcon />
              )}
            </th>
            <th onClick={() => handleSort("email")}>
              <span>Email</span>
              {activeColumn === "email" ? (
                sortDirection === "asc" ? (
                  <ArrowTopIcon />
                ) : (
                  <ArrowBottomIcon />
                )
              ) : (
                <ArrowBottomIcon />
              )}
            </th>
            <th onClick={() => handleSort("status")}>
              <span>Status</span>
              {activeColumn === "status" ? (
                sortDirection === "asc" ? (
                  <ArrowTopIcon />
                ) : (
                  <ArrowBottomIcon />
                )
              ) : (
                <ArrowBottomIcon />
              )}
            </th>
            <th onClick={() => handleSort("role")}>
              <span>Role</span>
              {activeColumn === "role" ? (
                sortDirection === "asc" ? (
                  <ArrowTopIcon />
                ) : (
                  <ArrowBottomIcon />
                )
              ) : (
                <ArrowBottomIcon />
              )}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((employee: Employee) => (
            <tr key={employee.id}>
              <td className={scss.nameCell}>
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className={scss.avatar}
                />
                {employee.name}
              </td>
              <td>{employee.email}</td>
              <td
                className={`${scss.status} ${
                  scss[employee.status.toLowerCase()]
                }`}
              >
                {employee.status}
              </td>
              <td>{employee.role}</td>
              <td className={scss.action}>
                <button
                  className={scss.editBtn}
                  onClick={() => onDelete(employee.id)}
                >
                  <BusketIcon />
                </button>
                <button
                  className={scss.deleteBtn}
                  onClick={() => onEdit(employee)}
                >
                  <EditIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editData && isModalOpen && (
        <div className={`${scss.editModal} ${isModalOpen ? scss.open : ""}`}>
          <div className={scss.modalContent}>
            <h3>Edit Employee</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveEdit(editData);
              }}
            >
              <label>
                Name:
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
              </label>
              <label>
                Status:
                <input
                  type="text"
                  value={editData.status}
                  onChange={(e) =>
                    setEditData({ ...editData, status: e.target.value })
                  }
                />
              </label>
              <label>
                Role:
                <input
                  type="text"
                  value={editData.role}
                  onChange={(e) =>
                    setEditData({ ...editData, role: e.target.value })
                  }
                />
              </label>
              <button type="submit">Save</button>
              <button
                type="button"
                className={scss.closeBtn}
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
