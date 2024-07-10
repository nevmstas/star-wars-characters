import styled from "@emotion/styled";

export const Detail = styled.div`
  border: 5px solid #495057;
  background-color: #ced4da;
  color: #495057;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  width: 300px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
`;

export const StyledLabel = styled("label")`
  font-weight: bold;
`;

export const StyledForm = styled("form")`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const VehicleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 5px;
`;
