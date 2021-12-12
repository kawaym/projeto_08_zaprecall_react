import { useState } from "react/cjs/react.development"
import FaceTitulo from "./FaceTitulo"
import virar from "../assets/turn.png"
import "../css/Flashcard.css"
import FaceVirada from "./FaceVirada"
import FaceRespondida from "./FaceRespondida"

export default function Flashcard({children : [{titulo, quantidade, cartas}, aumentarResposta, proximaTela]}){
    const cartasTeste = [...cartas];
    const [[respostaDadaColor, respostaDadaBoxShadow], setRespostaDada] = useState(["white", "rgba(0, 0, 0, 0.24)"]);
    const [cartaEmJogo, setCartaEmJogo] = useState(cartasTeste[0]);
    const [faceAtual, setFaceAtual] = useState('face-titulo');

    function avancarFace(faceChamada){
        if (faceChamada === 'face-titulo'){
            setFaceAtual('face-virada');
        }
        else if(faceChamada === 'face-virada'){
            setFaceAtual('face-respondida');
        }
        else if(faceChamada === 'face-respondida'){
            if ((cartaEmJogo.cartaAtual + 1) < quantidade){
                setCartaEmJogo(cartasTeste[cartaEmJogo.cartaAtual + 1]);
                setRespostaDada(["white", "rgba(0, 0, 0, 0.24)"]);
                setFaceAtual('face-titulo');
            }
            else{
                proximaTela('flashcards');
            }            
        }        
    }
    function handleFaceMostrada(cartaAMostrar){
        if (cartaAMostrar === 'face-titulo'){
            return(
                <FaceTitulo>{cartaEmJogo.titulo}{virar}{avancarFace}</FaceTitulo>
            )
        }
        else if(cartaAMostrar === 'face-virada'){
            return(
                <FaceVirada>{cartaEmJogo.titulo}{cartaEmJogo.conteudoCarta}{selecionarResposta}{aumentarResposta}{avancarFace}</FaceVirada>
            )
        }
        else if(cartaAMostrar === 'face-respondida'){
            return(
                <FaceRespondida>{cartaEmJogo.titulo}{cartaEmJogo.conteudoCarta}{virar}{avancarFace}</FaceRespondida>
            )
        }
    }
    function selecionarResposta(color, boxShadow){
        setRespostaDada([color, boxShadow]);
    }
    let estilo = {
        borderColor: respostaDadaColor,
        boxShadow: `0px 8px 24px ${respostaDadaBoxShadow}`,
    }
    return(
        <div className="carta" style={estilo} data-identifier="flashcard">
            <span className="contador-carta" data-identifier="counter">{cartaEmJogo.cartaAtual + 1}/{quantidade}</span>
            {handleFaceMostrada(faceAtual)}
        </div>
    )
}
