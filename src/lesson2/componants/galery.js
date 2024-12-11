import { useEffect } from 'react';
import { useState } from 'react';
// import a from '../../imag/1.jpg';
// import b from '../../imag/3.jpg';
// import c from '../../imag/4.jpg';
// import d from '../../imag/5.jpg';
// import e from '../../imag/6.jpg';
// import f from '../../imag/7.jpg';
import Image from './Image';

export default function Galery(){
    // const[images,setImages]=useState([a,b,c,d,e,f]);
    const[index,setIndex]=useState(0);
    return(
        <>
    <button disabled={index===5} onClick={() => setIndex(index+1)}>←</button>
    <Image path={index}></Image>
    <button disabled={index===0} onClick={() =>  setIndex(index-1)} >→</button>


    </> );
}

