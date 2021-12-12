import { useState } from "react/cjs/react.development";
import Flashcard from "./Flashcard";
const deck = {
    titulo: "Conhecimentos Gerais React",
    quantidade: 8,
    cartas:
        [
            {
                titulo: "O que é JSX?",
                cartaAtual: 0,
                conteudoCarta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias possimus tenetur laboriosam temporibus nisi! Soluta deleniti nostrum libero aspernatur maiores!"
            },
            {
                titulo: "O React é...",
                cartaAtual: 1,
                conteudoCarta: "Lorem ipsum dolor sitdsfaçoihfoiusdaofusoifdsugfyuaouy."
            },
            {
                titulo: "O React é...",
                cartaAtual: 2,
                conteudoCarta: "Lorem ipsum dolor sit."
            }
        ]
}

export default function TelaFlashCards({proximaTela}){
    const [respostasCorretas, setRespostasCorretas] = useState(0);
    function aumentarResposta(){
        setRespostasCorretas(respostasCorretas + 1);
    }
    return(
        <>
            <Flashcard>
                {deck}{aumentarResposta}
            </Flashcard>
        </>
    )
}