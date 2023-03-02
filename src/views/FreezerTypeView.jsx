import { FreezerTypeList } from "../components/Freezer/FreezerTypeList";
import { Title } from "tools/GlobalComponents";
import styled from "styled-components";
import { AddFreezerType } from "components/Freezer/AddFreezerType";

// @ts-ignore
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
`;

export const FreezerTypeView = () => {
  return (
    <>
      <Title>Types de congélateurs</Title>
      <GridContainer>
        <div>
          <FreezerTypeList />
        </div>
        <div>
          <AddFreezerType />
        </div>
      </GridContainer>
    </>
  );
};
