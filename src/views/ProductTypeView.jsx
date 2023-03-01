import React from "react";
import { ProductTypeList } from "../components/Product/ProductTypeList";
import { Title } from "tools/GlobalComponents";

export const ProductTypeView = () => {
  return (
    <>
      <Title>Types de produits</Title>
      <ProductTypeList />
    </>
  );
};
