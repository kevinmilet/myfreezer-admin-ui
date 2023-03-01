import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import { FreezerTypeView } from "./views/FreezerTypeView";
import { UserView } from "./views/UserView";
import { ProductTypeView } from "./views/ProductTypeView";
import styled from "styled-components";

// @ts-ignore
const Main = styled.div`
  margin: 15px;
`;

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Main>
        <Routes>
          <Route path="/users" element={<UserView />} />
          <Route path="/types_congelateurs" element={<FreezerTypeView />} />
          <Route path="/types_produits" element={<ProductTypeView />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
