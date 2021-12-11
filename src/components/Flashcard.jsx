import virar from "../assets/turn.png"
import "../css/Flashcard.css"

export default function Flashcard({children : {titulo, cartaAtual, totalCartas, conteudoCarta}}){
    return(
        <div className="carta">
            <div className="cabecalho-carta">
                <h1 className="titulo-carta">{titulo}</h1>
                <span className="contador-carta">{cartaAtual}/{totalCartas}</span>
            </div>
            <p className="conteudo-carta">{conteudoCarta}</p>
            <button className="botao-virar-carta">
                <img className="virar-carta" src={virar}/>
            </button>
        </div>

    )
}