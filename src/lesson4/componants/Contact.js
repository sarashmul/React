import { useNavigate } from "react-router-dom";
export default function Contact(){
    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    const navigate=useNavigate();
    const submit=()=>{
        navigate('/thankyuo');
    }
    return(
        <>
       <p>Contact</p>
        <button onClick={submit}>submit</button>

    </> );
}