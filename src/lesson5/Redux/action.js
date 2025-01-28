import { ADD,REMOVE } from "./actionTipe";




export const add = (data) => ({
    type: ADD, 
    payload: data,
});

export const remove = (id) => ({ // Assuming you want to remove by id
    type: REMOVE,
    payload: id // Pass the id or index to be removed
});