import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";
import "../css/reset.css";
import { useState } from "react";
import TelaCabecalho from "./TelaCabecalho";
import TelaFinal from "./TelaFinal";

export default function App(){
    const [telaAtual, setTelaAtual] = useState(<TelaInicial proximaTela={mudarTela}/>);
    function mudarTela(atual){
        if (atual === "inicial"){
            setTelaAtual(<TelaCabecalho> {<TelaFlashCards proximaTela={mudarTela}/>} </TelaCabecalho>);
        }
        else if (atual === "flashcards"){
            setTelaAtual(<TelaCabecalho> {<TelaFinal></TelaFinal>} </TelaCabecalho>);
        }
    }
    return(
        <>
            {telaAtual}
        </>
    )
}