import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/navigation/sidebar/Sidebar';
import { FreezerTypeView } from './views/FreezerTypeView';
import { UserView } from './views/UserView';
import { ProductTypeView } from './views/ProductTypeView';
import styled from 'styled-components';
import { Login } from 'components/User/Login';
import axios from 'axios';
import Loader from 'tools/Loader';

// @ts-ignore
const Main = styled.div`
  margin: 15px auto;
`;

export const AUTH_TOKEN_KEY = 'jhi-authentificationToken';

const UserConnected = ({ userInfos, setUserInfos }) => {
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setUserInfos(null);
    axios.get('/isConnected').then(
      (response) => {
        setUserInfos(response.data);
      },
      () => {
        if (location.pathname !== '/') {
          history('/login');
        }
      }
    );
  }, [history, location.pathname, setUserInfos]);

  return (
    <>
      {userInfos && (
        <Sidebar userInfos={userInfos} setUserInfos={setUserInfos} />
      )}
    </>
  );
};

const App = () => {
  const [userInfos, setUserInfos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      function (request) {
        const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );
  });

  return (
    <>
      {loading && (
        <div className="background-spinner">
          <div className="spinner">
            <Loader />
          </div>
        </div>
      )}

      <div className="global-container">
        <UserConnected userInfos={userInfos} setUserInfos={setUserInfos} />
        <Main>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/users" element={<UserView />} />
            <Route path="/types_congelateurs" element={<FreezerTypeView />} />
            <Route path="/types_produits" element={<ProductTypeView />} />
            <Route path="*" element={<Login setUserInfos={setUserInfos} />} />
          </Routes>
        </Main>
      </div>
    </>
  );
};

export default App;
