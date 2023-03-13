import styled from "styled-components";

export const CardListContainer = styled.div`
  padding: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom: 1px;
`;

export const CardListHeader = styled.div`
  position: relative;

  padding: 9px 11px 1px 9px;
  color: ${(props) => props.theme.primaryFont};
  font-weight: 600;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 100%;
`;
export const CardListWrapper = styled.div`
  min-width: 170px;
  height: 88vh;
  // position: relative;
  /* overflow: auto; */
`;
export const CardHeadAdding = styled.div`
  display: flex;
  justify-content: space-between;
`;
