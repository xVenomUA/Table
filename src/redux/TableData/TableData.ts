import { createSlice } from "@reduxjs/toolkit";
import { employees } from "../../constants/NavBarData";

const initialState = {
  data: employees,
  filter: "",
};
type Employee = {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  avatar: string;
};

const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    deleteEmployee: (state, action) => {
      state.data = state.data?.filter(
        (employee: Employee) => employee.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      state.data = state.data?.map((employee: Employee) => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        }
        return employee;
      });
    },
    addEmployee: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    filterData: (state, action) => {
      state.filter = action.payload;
    }, 
  },
});

export const { deleteEmployee, editEmployee, addEmployee, filterData} = TableSlice.actions;

export const selectEmployees = (state: { Table: { data: Employee[] } }) =>
  state.Table.data;
export const selectFilter = (state: { Table: { filter: string } }) => state.Table.filter; 
export default TableSlice.reducer;
