import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import {
  CardListContainer,
  CardListWrapper,
  CardHeadAdding,
} from "../styles/CardList.styles";
import CardListHeader from "./CardListHeader";
import AddForm from "./AddForm";

const getFilteredCards = (cards, searchText) => {
  if (searchText) {
    return cards.filter((card) =>
      card.content.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return cards;
};

const CardList = (props) => {
  return (
    <CardListWrapper>
      <CardHeadAdding>
        <CardListHeader
          listName={props.list.name}
          onChangeListName={props.onChangeListName}
          onRemoveList={props.onRemoveList}
          onDuplicateList={props.onDuplicateList}
        />
        {props.list.name == "Done" ? null : (
          <AddForm onConfirm={props.onAddCard} placeholder="+ " />
        )}
      </CardHeadAdding>
      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <CardListContainer
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {getFilteredCards(props.list.cards, props.searchText).map(
              (card, index) => (
                <Card key={card.id} card={card} index={index} />
              )
            )}

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
  searchText: PropTypes.string,
  onChangeCardContent: PropTypes.func,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  droppableId: PropTypes.string,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
  onDuplicateList: PropTypes.func,
};
export default CardList;
