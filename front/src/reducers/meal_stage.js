const initialState = {
    user: "unknown user",
    tab: "Meal",
    taskAmnt: 0,
    event: []
};

export default function MealInfo (state = initialState, action) {
    switch (action.type) {
        case "SET_TAB":
            return {...state, tab: action.payload};
        case "SET_TASK":
            return {...state, event: action.payload};
        case "SET_AMNT":
            return {...state, taskAmnt: action.payload};
        default:
            return state
    }
};