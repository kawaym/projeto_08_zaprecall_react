import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";
import "../css/reset.css";
import { useState } from "react";
export default function App(){
    const [telaAtual, setTelaAtual] = useState(<TelaInicial proximaTela={mudarTela}/>)
    function mudarTela(){
        setTelaAtual(TelaFlashCards);
    }
    return(
        <>
            {telaAtual}
        </>
    )
}