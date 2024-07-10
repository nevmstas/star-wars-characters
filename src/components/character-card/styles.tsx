import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Card = styled("div")`
  border: 5px solid #495057;
  background-color: #ced4da;
  color: #495057;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  height: 200px;
  width: 150px;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Info = styled("div")`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Header = styled("div")`
  height: 100px;
`