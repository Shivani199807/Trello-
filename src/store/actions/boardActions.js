import * as types from "../constants/ActionTypes";

export const addList = (name) => ({
  type: types.ADD_LIST,
  data: name,
});

export const addCard = (listIndex, cardContent) => ({
  type: types.ADD_CARD,

  data: { listIndex, cardContent },
});

export const setCardContent = (listIndex, cardIndex, content) => ({
  type: types.SET_CARD_CONTENT,
  data: { listIndex, cardIndex, content },
});

export const reOrderList = (listId, cardSourceIndex, cardDestinationIndex) => ({
  type: types.RE_ORDER_LIST,
  data: {
    listId,
    cardSourceIndex,
    cardDestinationIndex,
  },
});

export const moveCardToList = (
  sourceListId,
  cardId,
  destinationListId,
  cardDestinationIndex
) => ({
  type: types.MOVE_CARD_TO_LIST,
  data: {
    sourceListId,
    cardId,
    destinationListId,
    cardDestinationIndex,
  },
});
