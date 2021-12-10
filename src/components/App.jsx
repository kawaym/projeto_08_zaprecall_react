import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";
import "../css/reset.css";
import { useState } from "react";
export default function App(){
    const [telaAtual, setTelaAtual] = useState(<TelaInicial proximaTela={mudarTela}/>)
    const estado = true;
    function mudarTela(atual){
        if (atual === "flashcard"){
            setTelaAtual(<TelaInicial proximaTela={mudarTela}/>);
        }
        else{
            setTelaAtual(<TelaFlashCards proximaTela={mudarTela}/>);
        }
    }
    return(
        <>
            {telaAtual}
        </>
    )
}