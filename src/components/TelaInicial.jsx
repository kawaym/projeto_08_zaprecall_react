import "../css/TelaInicial.css";
import logo from "../assets/logo.png";
import next from "../assets/next.png";

export default function TelaInicial({proximaTela}){
    return(
        <div className="tela-inicial">
            <img src={logo} className="logo" alt="Logomarca Zap Recall"/>
            <button className="iniciar" data-identifier="start-zap-recall" type="button" onClick={() => proximaTela('inicial')}>
                Praticar React
                <img src={next} alt="Símbolo de Próxima Tela"/>
            </button>
        </div>
    )
}