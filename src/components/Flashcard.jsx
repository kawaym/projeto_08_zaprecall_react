import { useState } from "react/cjs/react.development"
import FaceTitulo from "./FaceTitulo"
import virar from "../assets/turn.png"
import "../css/Flashcard.css"
import FaceVirada from "./FaceVirada"
import FaceRespondida from "./FaceRespondida"

export default function Flashcard({children : {titulo, cartaAtual, totalCartas, conteudoCarta}}){
    const [respostaDada, setRespostaDada] = useState("transparent");
    const [faceAtual, setFaceAtual] = useState(<FaceTitulo>{titulo}{virar}{avancarFace}</FaceTitulo>);
    function selecionarResposta(color){
        setRespostaDada(color);
        setFaceAtual(<FaceRespondida>{titulo}{conteudoCarta}{virar}</FaceRespondida>)
    }
    function avancarFace(){
        setFaceAtual(<FaceVirada>{titulo}{conteudoCarta}{selecionarResposta}</FaceVirada>)
    }
    return(
        <div className="carta" style={{borderColor: respostaDada}}>
            <span className="contador-carta">{cartaAtual}/{totalCartas}</span>
            {faceAtual}
        </div>
    )
}