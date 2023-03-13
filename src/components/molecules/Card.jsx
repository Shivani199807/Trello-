import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import OutsideClickHandler from "./OutsideClickHandler";
import { Modal } from "react-bootstrap";
import {
  CardContainer,
  CardMainTitle,
  CardOuterGroup,
} from "../../styles/Card.styles";

import TaskImage from "../../assets/Tasks.png";

const Card = ({ card, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef(null);

  const [cardContent, setCardContent] = useState(card.content);

  useEffect(() => {
    setCardContent(card.content);
  }, [card.content]);

  return (
    <>
      <OutsideClickHandler>
        <Draggable key={card.id} draggableId={card.id} index={index}>
          {(provided) => (
            <CardContainer
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={provided.draggableProps.style}
            >
              <CardOuterGroup innerRef={ref} onClick={handleShow}>
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
