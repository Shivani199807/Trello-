import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BoardContainer } from "../styles/Board.styles";
import CardList from "../components/molecules/CardList";

import {
  addCard,
  reOrderList,
  moveCardToList,
} from "../store/actions/boardActions";
import Header from "../components/molecules/Header";

const Trello = (props) => {
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // Dropped in the same list
      props.reOrderList(source.droppableId, source.index, destination.index);
    } else {
      // Drop in other list
      props.moveCardToList(
        source.droppableId,
        draggableId,
        destination.droppableId,
        destination.index
      );
    }
  };
  return (
    <div>
      <Header />
      <BoardContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lists.map((list, listIndex) => (
            <CardList
              key={list.id}
              droppableId={list.id}
              list={list}
              onAddCard={(cardContent) =>
                props.onAddCard(listIndex, cardContent)
              }
            />
          ))}
        </DragDropContext>
      </BoardContainer>
    </div>
  );
};

Trello.propTypes = {
  reOrderList: PropTypes.func,
  moveCardToList: PropTypes.func,
  lists: PropTypes.array,

  onAddCard: PropTypes.func,
};
const mapStateToProps = (state) => ({
  lists: state.board.currentState.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: bindActionCreators(addCard, dispatch),

  reOrderList: bindActionCreators(reOrderList, dispatch),
  moveCardToList: bindActionCreators(moveCardToList, dispatch),

  onAddCard: bindActionCreators(addCard, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trello);
