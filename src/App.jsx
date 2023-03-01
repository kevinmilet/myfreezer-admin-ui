import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/navigation/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
    </div>
  );
}

export default App;
