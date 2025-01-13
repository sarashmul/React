import { useTranslation } from "react-i18next";

export default function Thankyou(){
    const {t}=useTranslation();
    console.log("yyyyyyy");
    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    return(
        <>
       <p>{t("Thankyou")}</p>
        

    </> );
}