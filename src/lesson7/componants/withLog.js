import { useRef, useEffect, useState } from "react";


export default function WithLog(Componant) {
    return function WithLog(props){
        var now=new Date() ;
        console.log(now);
        return(
            <>

            <h1>withlog</h1>
            <Componant {...props}/>
            </>
        );
    };
}