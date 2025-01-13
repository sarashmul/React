import { useTranslation } from "react-i18next";

export default function About(){
    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    const {t}=useTranslation();
    return(
        <>
       <p>{t("About")}</p>


    </> );
}