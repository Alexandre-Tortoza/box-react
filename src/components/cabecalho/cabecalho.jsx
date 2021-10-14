import React, { Component } from "react";
import "./cabecalho.css";
import luta from "../../assets/img/luta-no-ring.jpg"
import logo from "../../assets/logo/logo.png"

class Cabecalho extends Component {
    render() {
        return (

            <header className="conteudo cabecalho">
            <div className="iTelaCheia">
                <img src={luta} alt="Luta no ring LA box" className="iTelaCheia__img"/>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo LA box" className="logo__img" />
            </div>
            </header>

        );
    }
}

export default Cabecalho;
