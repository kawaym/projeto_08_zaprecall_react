export default function FaceRespondida({children: [titulo, conteudo, virar, avancarFace]}){
    return(
        <>
            <h1 className="titulo-carta">{titulo}</h1>
            <span className="conteudo-carta">{conteudo}</span>
            <button className="botao-virar-carta" type="button" onClick={() => avancarFace('face-respondida')} data-identifier="arrow">
                <img className="virar-carta" src={virar} alt="Virar Carta"/>
            </button>
        </>
    )
}