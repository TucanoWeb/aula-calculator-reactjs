import "./styles.css"
import { evaluate } from "mathjs";

const Calculadora = () => {

    var valorPainel;

    function mostrarValoresPainel(opcaoDigitada){
        const display = document.getElementById("inputLabel")

        if(display.value === "0"){
            display.value = opcaoDigitada
        }else{
            display.value += opcaoDigitada
        }

        valorPainel = display.value
        return display.value

    }

    function resultado(estrutura){
        const display = document.getElementById("inputLabel")
        let resultadoFinal = evaluate(estrutura)
        display.value = resultadoFinal
    }

    return (
        <>
        <h1>Calculadora em ReactJS</h1>
        <div className="wrapperCalc">
            
            <div>
                <input type="text" id="inputLabel" value="0" />
            </div>

            <div className="wrapperPanelNumbers">
                <div className="panelNumbers">
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("1")} id="1">1</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("2")} id="2">2</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("3")} id="3">3</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("4")} id="4">4</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("5")} id="5">5</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("6")} id="6">6</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("7")} id="7">7</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("8")} id="8">8</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("9")} id="9">9</div>
                    <div className="buttonNumber" onClick={() => mostrarValoresPainel("0")} id="0">0</div>
                </div>


                <div className="panelOperators">
                    <div className="buttonOp" id="soma" onClick={() => mostrarValoresPainel("+")}>+</div>
                    <div className="buttonOp" id="subtracao" onClick={() => mostrarValoresPainel("-")}>-</div>
                    <div className="buttonOp" id="multiplicacao" onClick={() => mostrarValoresPainel("*")}>*</div>
                    <div className="buttonOp" id="parent_open" onClick={() => mostrarValoresPainel("(")}>(</div>
                    <div className="buttonOp" id="parent_close" onClick={() => mostrarValoresPainel(")")}>)</div>
                    <div className="buttonOp" id="divisao" onClick={() => mostrarValoresPainel("/")}>/</div>
                    <div className="buttonOp" id="igual" onClick={() => resultado(valorPainel)}>=</div>
                    <div className="buttonOp" id="apagar" onClick={() => window.location.reload()}>C</div>
                </div>

                </div> 

        </div>
        </>
    )
}

export default Calculadora