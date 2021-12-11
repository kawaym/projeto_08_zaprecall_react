import Flashcard from "./Flashcard";

export default function TelaFlashCards({proximaTela}){
    const carta = {
        titulo: "Lorem ipsum dolor sit amet.",
        cartaAtual: 1,
        totalCartas: 8,
        conteudoCarta: "Lorem, ipsum dolor."
    }
    return(
        <>
            <Flashcard>
                {carta}
            </Flashcard>
        </>
    )
}