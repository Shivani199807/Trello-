import styled from "styled-components";

export const MainLogin = styled.div``;
export const LoginDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
  padding: 70px;
  border: 4px solid #ffffff;
`;
export const LoginLeftSide = styled.div`
  width: 45%;
`;
export const LoginRightSide = styled.div`
  background-color: ${(props) => props.theme.whiteIcon};
  padding: 20px;
  padding-left: 20px;
  width: 40%;
  padding-bottom: 70px;
`;

export const LoginHeading = styled.div`
  font-weight: bold;
  color: blue;
  font-size: 74px;
  padding: 30px 0px;
  padding-top: 30px;
  padding-bottom: 50px;
`;
export const TrelloImage = styled.img`
  width: 100%;
`;
export const TextMargins = styled.div`
  padding-bottom: 20px;
  width: 97%;
`;
export const DontHaveAccount = styled.div`
  text-align: center;
  color: blue;
  padding-top: 10px;
`;
export const Registers = styled.span`
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;
