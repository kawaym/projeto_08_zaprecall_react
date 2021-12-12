import "../css/FaceTitulo.css"
export default function FaceTitulo({children: [titulo, virar, avancarFace]}){
    return(
        <>
        <h1 className="titulo-carta" id="face-titulo">{titulo}</h1>
        <button className="botao-virar-carta" type="button" data-identifier="arrow" onClick={() => avancarFace('face-titulo')}>
            <img className="virar-carta" src={virar}/>
        </button>
        </>
    )
}