import { combineReducers } from "redux";
import board from "./reducers/boardReducer";

import stateHistoryEnhancer from "./reducers/stateHistoryEnhancer";

const rootReducer = combineReducers({
  board: stateHistoryEnhancer(board),
});

export default rootReducer;
