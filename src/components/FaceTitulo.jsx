import "../css/FaceTitulo.css"
export default function FaceTitulo({children: [titulo, virar, avancarFace]}){
    return(
        <>
        <h1 className="titulo-carta" id="face-titulo">{titulo}</h1>
        <button className="botao-virar-carta" onClick={avancarFace}>
            <img className="virar-carta" src={virar}/>
        </button>
        </>
    )
}