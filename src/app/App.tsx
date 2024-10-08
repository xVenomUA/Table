import { Outlet, Routes, Route } from "react-router-dom";
import Sidebar from "../components/SideBar/SideBar";
import scss from "./App.module.scss";
import { lazy, Suspense } from "react";
import "normalize.css";

const Home = lazy(() => import("../pages/Home"));
const Table = lazy(() => import("../pages/Table"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  return (
    <div className={scss.appContent}>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={scss.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Table" element={<Table />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
