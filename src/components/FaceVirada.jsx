import "../css/FaceVirada.css"
export default function FaceVirada({children: [titulo, conteudo]}){
    return(
        <>
            <h1 className="titulo-carta">{titulo}</h1>
            <span className="conteudo-carta">{conteudo}</span>
            <div className="container-botoes">
                <button className="resposta" type="button" id="aprendi-agora">
                    Aprendi agora
                </button>
                <button className="resposta" type="button" id="nao-lembrei">
                    Não lembrei
                </button>
                <button className="resposta" type="button" id="lembrei-esforco">
                    Lembrei com esforço
                </button>
                <button className="resposta" type="button" id="zap">
                    Zap!
                </button>       
            </div>
        </>
    )
}