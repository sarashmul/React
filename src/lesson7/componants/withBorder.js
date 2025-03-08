import React from 'react'

export default function WithBorder(Componant) {
    return function WithBorder(props){
        
        return(
            <>

            <h1 className='Border'>withBorder
            <Componant {...props}/>
            </h1>
            </>
        );
    };
}
