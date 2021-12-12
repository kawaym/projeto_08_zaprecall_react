import { useState } from "react/cjs/react.development"
import FaceTitulo from "./FaceTitulo"
import virar from "../assets/turn.png"
import "../css/Flashcard.css"
import FaceVirada from "./FaceVirada"
import FaceRespondida from "./FaceRespondida"

export default function Flashcard({children : {titulo, cartaAtual, totalCartas, conteudoCarta}}){
    const [respostaDada, setRespostaDada] = useState("transparent");
    const [faceAtual, setFaceAtual] = useState(<FaceRespondida>{titulo}{conteudoCarta}{virar}{respostaDada}</FaceRespondida>);
    return(
        <div className="carta" style={{borderColor: respostaDada}}>
            <span className="contador-carta">{cartaAtual}/{totalCartas}</span>
            {faceAtual}
        </div>
    )
}