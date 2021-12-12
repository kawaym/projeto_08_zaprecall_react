import "../css/FaceVirada.css"
export default function FaceVirada({children: [titulo, conteudo,  selecionarResposta]}){
    return(
        <>
            <h1 className="titulo-carta" id="face-virada">{titulo}</h1>
            <span className="conteudo-carta">{conteudo}</span>
            <div className="container-botoes">
                <button className="resposta" type="button" onClick={() => selecionarResposta("#000000")} id="aprendi-agora">
                    Aprendi agora
                </button>
                <button className="resposta" type="button" onClick={() => selecionarResposta("#F74848")} id="nao-lembrei">
                    Não lembrei
                </button>
                <button className="resposta" type="button" onClick={() => selecionarResposta("#62DB38")} id="lembrei-esforco">
                    Lembrei com esforço
                </button>
                <button className="resposta" type="button" onClick={() => selecionarResposta("#FFEF61")} id="zap">
                    Zap!
                </button>       
            </div>
        </>
    )
}