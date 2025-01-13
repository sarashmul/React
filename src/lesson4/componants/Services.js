import { useTranslation } from "react-i18next";

export default function Services(){
    const {t}=useTranslation();

    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    return(
        <>
       <p>{t("Services")}</p>


    </> );
}