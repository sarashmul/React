


import { ADD, REMOVE,RESTORE } from "./actionTipe";

const initialState = {
    todo: [],
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newTodosAfterAdd = [...state.todo, action.payload];
            console.log("Updated todos after add:", newTodosAfterAdd); // Log the updated todos array
            return { ...state, todo: newTodosAfterAdd };
        case REMOVE:
            const updatedTodosAfterRemove = state.todo.filter(todo => todo.Id !== action.payload.Id);
            console.log("Updated todos after remove:", updatedTodosAfterRemove);
            return { 
                ...state, 
                todo: updatedTodosAfterRemove 
                };
         case RESTORE:
             const restore = [...state.todo, action.payload];
             console.log("Updated todos after add:", restore); // Log the updated todos array
              return { ...state, todo: restore };
        default:
            console.log("Current todos:", state.todo); // Log current todos for unhandled actions
            return state; 
    }
};