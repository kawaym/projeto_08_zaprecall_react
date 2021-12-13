import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";
import "../css/reset.css";
import { useState } from "react";
import TelaCabecalho from "./TelaCabecalho";
import TelaFinal from "./TelaFinal";
const deck = {
    titulo: "Conhecimentos Gerais React",
    quantidade: 8,
    cartas:
        [
            {
                titulo: "O que é JSX?",
                cartaAtual: 0,
                conteudoCarta: "Uma extensão de linguagem do JavaScript"
            },
            {
                titulo: "O React é __",
                cartaAtual: 1,
                conteudoCarta: "uma biblioteca JavaScript para construção de interfaces"
            },
            {
                titulo: "Componentes devem iniciar com __",
                cartaAtual: 2,
                conteudoCarta: "letra maiúscula"
            },
            {
                titulo: "Podemos colocar __ dentro do JSX",
                cartaAtual: 3,
                conteudoCarta: "expressões"
            },
            {
                titulo: "O ReactDOM nos ajuda __ ",
                cartaAtual: 4,
                conteudoCarta: "interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                titulo: "Usamos o npm para __",
                cartaAtual: 5,
                conteudoCarta: "gerenciar os pacotes necessários e suas dependências"
            },
            {
                titulo: "Usamos props para __",
                cartaAtual: 6,
                conteudoCarta: "passar diferentes informações para componentes "
            },
            {
                titulo: "Usamos estado (state) para __",
                cartaAtual: 7,
                conteudoCarta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            },
        ]
}
export default function App(){
    const [telaAtual, setTelaAtual] = useState(<TelaInicial proximaTela={mudarTela}/>);
    const [resultado, setResultado] = useState(
        {
            zap: 0,
            correto: 0,
            incorreto: 0,
            neutro: 0,
        }
    )
    function contarResultados(color){
        switch (color){
            case '#FFEF61':
                setResultado({...resultado, zap: resultado.zap+=1});
                break;
            case '#62DB38':
                setResultado({...resultado, correto: resultado.correto+=1});
                break;
            case '#F74848':
                setResultado({...resultado, incorreto: resultado.incorreto+=1});
                break;
            default:
                setResultado({...resultado, neutro: resultado.neutro+=1})
                break;
        }
    }
    function mudarTela(atual){
        if (atual === "inicial"){
            setTelaAtual(<TelaCabecalho> {<TelaFlashCards deck={deck} proximaTela={mudarTela} contarResultados={contarResultados}/>} </TelaCabecalho>);
        }
        else if (atual === "flashcards"){
            setTelaAtual(<TelaCabecalho> {<TelaFinal respostasCorretas={resultado}></TelaFinal>} </TelaCabecalho>);
        }
    }
    return(
        <>
            {telaAtual}
        </>
    )
}