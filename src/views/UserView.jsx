import React from "react";
import { UserList } from "../components/User/UserList";
import { Title } from "tools/GlobalComponents";

export const UserView = () => {
  return (
    <>
      <Title>Utilisateurs</Title>
      <UserList />
    </>
  );
};
