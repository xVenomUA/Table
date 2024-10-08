import { configureStore } from "@reduxjs/toolkit";
import TableSlice from "../TableData/TableData";
const store = configureStore({
  reducer: {
    Table: TableSlice
  },
});

export default store;
