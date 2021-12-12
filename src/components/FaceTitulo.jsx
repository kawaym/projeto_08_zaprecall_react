import "../css/FaceTitulo.css"
export default function FaceTitulo({children: [titulo, virar]}){
    return(
        <>
        <h1 className="titulo-carta">{titulo}</h1>
        <button className="botao-virar-carta">
            <img className="virar-carta" src={virar}/>
        </button>
        </>
    )
}