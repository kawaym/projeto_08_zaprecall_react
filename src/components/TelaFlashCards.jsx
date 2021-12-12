import Flashcard from "./Flashcard";

export default function TelaFlashCards({proximaTela}){
    const carta = {
        titulo: "O que é JSX?",
        cartaAtual: 1,
        totalCartas: 8,
        conteudoCarta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias possimus tenetur laboriosam temporibus nisi! Soluta deleniti nostrum libero aspernatur maiores!"
    }
    return(
        <>
            <Flashcard>
                {carta}
            </Flashcard>
        </>
    )
}