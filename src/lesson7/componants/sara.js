import { useRef, useEffect, useState } from "react";
import { useLocalStorage } from "../customHook/localStorage";

export default function Sara() {
    const s={sara:"0583281615"};
    useLocalStorage(s,"set");
    
    const {data}=useLocalStorage("sara","get");
    return(
        <>
        <p>in sara❤️😍🤣😂❤️😍</p>
        <p>{data}</p>
        </>
    )
}