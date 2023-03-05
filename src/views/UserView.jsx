import React from 'react';
import UserList from '../components/User/UserList';
import { Title } from 'tools/GlobalComponents';
import styled from 'styled-components';
import UserDetails from 'components/User/UserDetails';

// @ts-ignore
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const UserView = () => {
  return (
    <>
      <Title>Utilisateurs</Title>
      <GridContainer>
        <div>
          <UserList />
        </div>
        <div>
          <UserDetails />
        </div>
      </GridContainer>
    </>
  );
};
