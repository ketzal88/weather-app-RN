
const DATA = ["goal1", 'goal2', 'goal3']

const initialState = {
    goals: DATA,
    filteredGoals: DATA,
    favoritesGoals: []
}

const goalsReducer = ( state = initialState, action ) => {
    return state;
}

export default goalsReducer;