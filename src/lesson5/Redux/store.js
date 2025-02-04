
import { createStore,combineReducers } from "redux";
import { tasksReducer } from "./reducers";
import { recyclingBinReducer } from "./recyclingBinReducers";
import { applyMiddleware } from "redux";
import validatorMiddleware from "../middleware/validatorMiddleware.js"
const rootReducer=combineReducers({
   task: tasksReducer,
   RecyclingBin: recyclingBinReducer,
})

export const store = createStore(rootReducer,applyMiddleware(validatorMiddleware));
export default store;