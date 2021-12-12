import "../css/FaceVirada.css"
export default function FaceVirada({children: [titulo, conteudo,  selecionarResposta, aumentarResposta, avancarFace]}){
    
    function responder(color, boxShadow){
        selecionarResposta(color, boxShadow);
        avancarFace('face-virada');
        if (color === '#FFEF61'){
            aumentarResposta();
        }
    }
    return(
        <>
            <h1 className="titulo-carta" id="face-virada">{titulo}</h1>
            <span className="conteudo-carta">{conteudo}</span>
            <div className="container-botoes">
                <button className="resposta" type="button" onClick={() => responder("#000000", "rgba(0, 0, 0, 0.12)")} id="aprendi-agora">
                    Aprendi agora
                </button>
                <button className="resposta" type="button" onClick={() => responder("#F74848", "rgba(246, 72, 72, 0.12)")} id="nao-lembrei">
                    Não lembrei
                </button>
                <button className="resposta" type="button" onClick={() => responder("#62DB38", "rgba(98, 219, 56, 0.12)")} id="lembrei-esforco">
                    Lembrei com esforço
                </button>
                <button className="resposta" type="button" onClick={() => responder("#FFEF61", "rgba(255, 239, 97, 0.24)")} id="zap">
                    Zap!
                </button>       
            </div>
        </>
    )
}