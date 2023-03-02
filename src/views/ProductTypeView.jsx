import { ProductTypeList } from "../components/Product/ProductTypeList";
import { Title } from "tools/GlobalComponents";
import styled from "styled-components";
import { AddProductType } from "components/Product/AddProductType";

// @ts-ignore
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
`;

export const ProductTypeView = () => {
  return (
    <>
      <Title>Types de produits</Title>
      <GridContainer>
        <div>
          <ProductTypeList />
        </div>
        <div>
          <AddProductType />
        </div>
      </GridContainer>
    </>
  );
};
