import styled from "styled-components";

// @ts-ignore
export const Title = styled.h1`
  margin: 20px;
  color: #cd4631;
`;

// @ts-ignore
export const Titleh3 = styled.h3`
  margin: 10px 0;
  color: #474350;
`;

// @ts-ignore
export const Input = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  margin: 10px 0;
  outline-color: #4e73df;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
`;

// @ts-ignore
export const BtnPrimary = styled.button`
  margin: 10px 0;
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100px;
  border: unset;
  border-radius: 4px;
  outline-color: #4e73df;
  background-color: #4e73df;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, #4e73df 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #cd4631;
    outline-color: #cd4631;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(0 0 0 / 12%) 0px 1px 1px 0px, #cd4631 0px 0px 0px 1px,
      rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  }
`;
