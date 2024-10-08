
import React, { useState } from "react";
import scss from "./AddEmployeeModal.module.scss";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/TableData/TableData";

type AddEmployeeModalProps = {
  closeModal: () => void;
};

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      status,
      role,
      avatar,
    };

    dispatch(addEmployee(newEmployee));
    closeModal();
  };

  return (
    <div className={scss.modalContainer}>
      <div className={scss.modalContent}>
        <h3>Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </label>
          <label>
            Avatar (URL):
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </label>
          <div className={scss.buttons}>
            <button type="submit">Save</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
