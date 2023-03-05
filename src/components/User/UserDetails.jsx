import React from 'react';
import { Input } from 'tools/GlobalComponents';
import styled from 'styled-components';

// @ts-ignore
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const UserDetails = () => {
  return (
    <>
      <form>
        <Container>
          <div>
            <label htmlFor="lastname">Nom</label>
            <Input type="text" name="lastname" id="lastname" />
          </div>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <Input type="text" name="firstname" id="lastname" />
          </div>
        </Container>
        <Container>
          <div>
            <label htmlFor="email">Email</label>
            <Input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="created_at">Date d'inscription</label>
            <Input type="text" name="created_at" id="created_at" disabled />
          </div>
        </Container>
        <Container>
          <div>
            <label htmlFor="admin">Rôle admin</label>
            <input type="radio" id="adminTrue" name="admin" value="true" />
            <input
              type="radio"
              id="adminFalse"
              name="admin"
              value="false"
              checked
            />
          </div>
          <div>
            <label htmlFor="active">Compte actif</label>
            <input
              type="radio"
              id="activeTrue"
              name="active"
              value="true"
              checked
            />
            <input type="radio" id="activeFalse" name="active" value="false" />
          </div>
        </Container>
      </form>
    </>
  );
};

export default UserDetails;
