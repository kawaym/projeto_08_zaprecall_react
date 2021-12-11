import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";
import "../css/reset.css";
import { useState } from "react";
import TelaCabecalho from "./TelaCabecalho";
import TelaFinal from "./TelaFinal";
export default function App(){
    const [telaAtual, setTelaAtual] = useState(<TelaInicial proximaTela={mudarTela}/>)
    const estado = true;
    function mudarTela(atual){
        if (atual === "flashcard"){
            setTelaAtual(<TelaInicial proximaTela={mudarTela}/>);
        }
        else{
            setTelaAtual(<TelaCabecalho> {<TelaFlashCards  proximaTela={mudarTela}/>} </TelaCabecalho> );
        }
    }
    return(
        <>
            {telaAtual}
        </>
    )
}