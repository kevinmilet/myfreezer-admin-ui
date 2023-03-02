import React from "react";
import { BtnPrimary, Input, Titleh3 } from "tools/GlobalComponents";

export const AddProductType = () => {
  return (
    <>
      <Titleh3>Ajouter un type de produit</Titleh3>
      <Input type="text" className="form-control" id="name" name="name" />
      <BtnPrimary type="submit">Ajouter</BtnPrimary>
    </>
  );
};
