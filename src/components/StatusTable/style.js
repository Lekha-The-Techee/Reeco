import styled from "styled-components";

export const StatusList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  border: 1px solid #d1d1d1;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const ListItems = styled.li`
  border-right: 1px solid #d1d1d1;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  width: 150px;
  &:last-child {
    border-right: none;
  }
  @media screen and (max-width: 576px) {
    border-bottom: 1px solid #d1d1d1;
    border-right: none;
  }
`;

export const Text = styled.p`
  color: #000000;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const BoldText = styled.p`
  color: #000000;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 2px;
`;