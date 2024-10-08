import React, { useState } from "react";
import scss from "./Header.module.scss";
import SearchIcon from "../icons/SearchIcon";
import ClearIcon from "../icons/ClearIcon";
import AddEmployeeModal from "./AddEmployeeModal";
import { useDispatch } from "react-redux";
import { filterData } from "../../redux/TableData/TableData";


const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dispatch = useDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(filterData(e.target.value));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={scss.headerContainer}>
      <h2 className={scss.h2}>Data Table</h2>
      <div className={scss.div}>
        <div className={scss.searchBox}>
          <button className={scss.searchBtn}>
            <SearchIcon height={24} width={24} />
          </button>
          <input
            type="text"
            placeholder="Employee"
            value={searchTerm}
            onChange={handleInputChange}
            className={scss.input}
          />
          <button className={scss.clearBtn} onClick={clearSearch}>
            <ClearIcon />
          </button>
        </div>
        <button className={scss.addEmployeeBtn} onClick={openModal}>
          Add Employee
        </button>
      </div>

      {isModalOpen && <AddEmployeeModal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
