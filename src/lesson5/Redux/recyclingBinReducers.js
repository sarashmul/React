
import { REMOVE_NEVER, REMOVE,RESTORE } from "./actionTipe";

const initialState = {
    recyclingBin: [],
};

export const recyclingBinReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE:
            const addRecyclingBinReducer = [...state.recyclingBin, action.payload];
            console.log("Updated todos after add:", addRecyclingBinReducer); // Log the updated todos array
            return { ...state, recyclingBin: addRecyclingBinReducer };
        case REMOVE_NEVER:
            const removeRecyclingBinReducer = state.recyclingBin.filter(recyclingBin => recyclingBin.Id !== action.payload.Id);
            console.log("Updated todos after remove:", removeRecyclingBinReducer);
            return { ...state,recyclingBin: removeRecyclingBinReducer };
        case RESTORE:
            const restoreRecyclingBinReducer = state.recyclingBin.filter(recyclingBin => recyclingBin.Id !== action.payload.Id);
            console.log("Updated todos after remove:", restoreRecyclingBinReducer);
            return { ...state,  recyclingBin: restoreRecyclingBinReducer };        
        default:
            console.log("Current todos:", state.recyclingBin); // Log current todos for unhandled actions
            return state; 
    }
};