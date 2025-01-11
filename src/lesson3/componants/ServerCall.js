import { useEffect ,useState} from 'react';


export default function Pizza(){
 
    const[id,setId]=useState(0);
    useEffect(()=>{
        const fetchGet=async () =>{
            try{
            const response= await fetch(`http://localhost:5125/MyPizza/GetById/${id}`)
            console.log(response);
            }
            catch(error){
                console.error('Error fetching get:',error);
      
            }
        }
        fetchGet();
    },[id]);
    return(
        <>
    <p>enter id</p>
    <input onBlur={(e) => setId(e.target.value)}></input>
    {/* <button  onClick={() =>  setId()} >GetById</button> */}


    </> );
}




// import { useEffect, useState } from 'react';

// export default function Pizza() {
//     const [id, setId] = useState(0);

//     const fetchGet = async (idValue) => {
//         try {
//             const response = await fetch(`http://localhost:5125/MyPizza/GetById/${idValue}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching get:', error);
//         }
//     };

//     return (
//         <>
//             <p>Enter ID:</p>
//             <input type="number" onChange={(e) => setId(Number(e.target.value))} />
//             <button onClick={() => fetchGet(id)}>GetById</button>
//         </>
//     );
// }