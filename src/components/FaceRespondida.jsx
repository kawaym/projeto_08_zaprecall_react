export default function FaceRespondida({children: [titulo, conteudo, virar]}){
    return(
        <>
            <h1 className="titulo-carta">{titulo}</h1>
            <span className="conteudo-carta">{conteudo}</span>
            <button className="botao-virar-carta">
                <img className="virar-carta" src={virar}/>
            </button>
        </>
    )
}