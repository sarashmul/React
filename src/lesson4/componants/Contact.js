import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
export default function Contact(){
    const {t}=useTranslation();

    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    const navigate=useNavigate();
    const submit=()=>{
        navigate('/thankyuo');
    }
    return(
        <>
       <p>{t("Contact")}</p>
        <button onClick={submit} >{t("submit")}</button>

    </> );
}