import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import {
  CardListContainer,
  CardListWrapper,
  CardHeadAdding,
} from "../../styles/CardList.styles";
import CardListHeader from "./CardListHeader";
import AddForm from "./AddForm";

const CardList = (props) => {
  return (
    <CardListWrapper>
      <CardHeadAdding>
        <CardListHeader listName={props.list.name} />
        {props.list.name == "Done" ||
        props.list.name == "In Progress" ||
        props.list.name == "Ready" ? null : (
          <AddForm onConfirm={props.onAddCard} placeholder="+ " />
        )}
      </CardHeadAdding>
      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <CardListContainer
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {console.log(props?.list)}
            {props?.list?.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}

            {provided.placeholder}
            <div style={{ border: "1px solid" }}></div>
          </CardListContainer>
        )}
      </Droppable>
    </CardListWrapper>
  );
};

CardList.propTypes = {
  list: PropTypes.object,

  onChangeCardContent: PropTypes.func,

  droppableId: PropTypes.string,
  onAddCard: PropTypes.func,
};
export default CardList;
