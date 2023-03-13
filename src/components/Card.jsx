import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import OutsideClickHandler from "./OutsideClickHandler";
import { Modal } from "react-bootstrap";
import {
  CardContainer,
  CardMainTitle,
  CardOuterGroup,
} from "../styles/Card.styles";
import * as UtilsHelper from "../helpers/utils";

import TaskImage from "../assets/Tasks.png";

const Card = ({ card, index, onChangeCardContent }) => {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef(null);

  useEffect(() => {
    if (editMode) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editMode]);

  const [cardContent, setCardContent] = useState(card.content);

  useEffect(() => {
    setCardContent(card.content);
  }, [card.content]);

  const onClickOutside = () => {
    setEditMode(false);
    onChangeCardContent(cardContent);
  };

  const onClickSaveEdit = () => {
    if (editMode) {
      onChangeCardContent(cardContent);
    }
    setEditMode((iseditMode) => !iseditMode);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.stopPropagation();
      e.preventDefault();
      setEditMode(false);
      ref.current.blur();
      const name = ref.current.innerText;
      onChangeCardContent(name);
    }
  };
  return (
    <>
      <OutsideClickHandler
        shouldListenClick={editMode}
        onClickOutside={onClickOutside}
      >
        <Draggable key={card.id} draggableId={card.id} index={index}>
          {(provided) => (
            <CardContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={provided.draggableProps.style}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
            >
              <CardOuterGroup
                innerRef={ref}
                disabled={!editMode}
                onClick={handleShow}
              >
                {" "}
                <img src={TaskImage} style={{ width: "100px" }}></img>
                <CardMainTitle>{cardContent.cardTitle}</CardMainTitle>
              </CardOuterGroup>
            </CardContainer>
          )}
        </Draggable>
      </OutsideClickHandler>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardContent.cardTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Task Details
          </div>

          <div>{cardContent.cardDetails}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onChangeCardContent: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
};
export default Card;
