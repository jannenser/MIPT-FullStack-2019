import { combineReducers } from "redux"
import startStageInfo from "./start_page_stage"
import MealInfo from "./meal_stage"
import todos from './todos'

const rootReducer = combineReducers({
    todos,
    startStageInfo,
    MealInfo,
});

export default rootReducer