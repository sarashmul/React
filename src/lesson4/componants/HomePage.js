import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

// import a from '../../imag/1.jpg';
// import b from '../../imag/3.jpg';
// import c from '../../imag/4.jpg';
// import d from '../../imag/5.jpg';
// import e from '../../imag/6.jpg';
// import f from '../../imag/7.jpg';


export default function Home(){
    const {t}=useTranslation();

    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    return(
        <>
       <p>{t("HomePage")}</p>


    </> );
}
