import { useEffect } from "react";

export const useLocalStorage=(data,method)=>{

const toLocalStorage=()=>{


    switch(method){
        case "get":
            const obj=JSON.parse(localStorage.getItem(data));
            break;
        case "set":
            localStorage.setItem(data.key, JSON.stringify(data.value));
            break;
    }
}
    useEffect(()=>{toLocalStorage()},[data])

return {data};
}




