import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CardListHeader as StyledCardListHeader } from "../../styles/CardList.styles";
import OutsideClickHandler from "./OutsideClickHandler";

const CardListHeader = (props) => {
  const [listName, setListName] = useState(props.listName);
  useEffect(() => {
    setListName(props.listName);
  }, [props.listName]);

  return (
    <OutsideClickHandler>
      <StyledCardListHeader>
        <div>{listName}</div>
      </StyledCardListHeader>
    </OutsideClickHandler>
  );
};

CardListHeader.propTypes = {
  listName: PropTypes.string,
};

export default CardListHeader;
