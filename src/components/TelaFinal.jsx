import "../css/TelaFinal.css"
export default function TelaFinal({respostasCorretas}){
    return (
     <div className="container">
         <h1 className="msg-principal">
            {(respostasCorretas.incorreto !== 0) ? "Putz..😥 " : "PARABÉNS! 🥳"}
         </h1>
         <h2 className="texto-mensagem">
            {(respostasCorretas.incorreto !== 0) ? "Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!" : "Você não esqueceu de nenhum flashcard!" }
         </h2>
     </div>
    )
}