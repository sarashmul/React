import { ADD,REMOVE,REMOVE_NEVER,RESTORE } from "./actionTipe";




export const add = (data) => ({
    type: ADD, 
    payload: data,
});

export const remove = (task) => ({ // Assuming you want to remove by id
    type: REMOVE,
    payload: task // Pass the id or index to be removed
});

export const removeNever = (task) => ({ // Assuming you want to remove by id
    type: REMOVE_NEVER,
    payload: task // Pass the id or index to be removed
});

export const restore = (task) => ({ // Assuming you want to remove by id
    type: RESTORE,
    payload: task // Pass the id or index to be removed
});