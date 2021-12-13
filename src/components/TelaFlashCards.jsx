import Flashcard from "./Flashcard";
export default function TelaFlashCards({deck ,proximaTela, contarResultados}){   
    return(
        <>
            <Flashcard>
                {deck}{proximaTela}{contarResultados}
            </Flashcard>
        </>
    )
}