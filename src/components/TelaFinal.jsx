import { useState } from "react/cjs/react.development";
import "../css/TelaFinal.css"
export default function TelaFinal({respostasCorretas}){
    const [mensagemFinal, setMensagemFinal] = useState({principal: "PARABÉNS! 🥳 ", texto: "Você não esqueceu de nenhum flashcard!"});
    function mostrarMensagem(){
        if (respostasCorretas === 3){
            setMensagemFinal({principal: "Putz..😥 ", texto: "Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!"})
        }
        else{
            setMensagemFinal({principal: "PARABÉNS! 🥳 ", texto: "Você não esqueceu de nenhum flashcard!"});
        }
    }
    return (
     <div className="container">
         <h1 className="msg-principal">
            {mensagemFinal.principal}
         </h1>
         <h2 className="texto-mensagem">
            {mensagemFinal.texto}
         </h2>
     </div>
    )
}