import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import Schools from "./pages/Schools";
import SchoolDetailPage from "./pages/SchoolDetailPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-grow overflow-y-auto p-8 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:id" element={<SchoolDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
