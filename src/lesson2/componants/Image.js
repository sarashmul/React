import { useEffect } from 'react';
import { useState } from 'react';
import a from '../../imag/1.jpg';
import b from '../../imag/3.jpg';
import c from '../../imag/4.jpg';
import d from '../../imag/5.jpg';
import e from '../../imag/6.jpg';
import f from '../../imag/7.jpg';



export default function Image(props){
    // const[image,setImages]=useState();
    const[images,setImages]=useState([a,b,c,d,e,f]);

    return(
        <>
    <p>image: {props.path}</p>
    <img src={images[props.path]}></img>
    
    </> );
    

}