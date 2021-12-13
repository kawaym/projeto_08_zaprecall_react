import logoMini from "../assets/logo-mini.png"; 
import "../css/TelaCabecalho.css";

export default function TelaCabecalho({children}){
    return (
        <>
        <div className="cabecalho">
            <img src={logoMini} alt="Logo"/>
        </div>
            {children}
        </>
    )
}