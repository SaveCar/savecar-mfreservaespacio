import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import HeaderSmall from "../componentes/header/HeaderSmall.js";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio.js";
import CheckCarga from "./../componentes/CheckCarga/CheckCarga.js"

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  padding: 0px 16px;
  background: #304562;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    padding: 0px 10%;
  }
  @media (min-width: ${minWidth2}) {
    padding: 0px 10%;
    height: 12vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
  }
`;



export const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction:column;
`;


const WrapperBodyBlue = styled.div`
  background: #C4D7F1 !important;
  height: 100vh;
  @media (min-width: ${minWidth1}) {
    height: 120vh;
  }
  @media (min-width: ${minWidth2}) {
    height: 130vh;
  }
  @media (min-width: ${maxWidth}) {
    height: 140vh;
  }
`;

const WrapperBodyBlue2 = styled.div`
  background: #C4D7F1 !important;
  height: 100vh;
`;

const ESPACIOS_DISPONIBLES = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";
const GUARDAR_DATOS = "CheckCarga";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VIEW: '',
            espacios: true
        };
    }

    componentDidMount() { 
      this.configureViews();
    }

    configureViews = () => {
        if(this.state.espacios){
            this.setState({VIEW: ESPACIOS_DISPONIBLES});
        }
    };

    changeView = (VIEW) => {
        this.setState({
            VIEW: VIEW,
        });
    };

    unmountApplication = (toMf) => {
        localStorage.setItem("toMf", toMf);
        singleSpa.unregisterApplication("@savecar/mfregreserva").then(() => {
          console.log("redireccionando");
        });
    };
    
    handleOnBack = () => {
        this.unmountApplication("mfcliente");
    };

    render() {
        const {VIEW} = this.state;
        
        switch (VIEW) {
          case ESPACIOS_DISPONIBLES:
            return(
              < WrapperBodyBlue>
                <WrapperHeader>
                  <HeaderSmall onBack={this.handleOnBack}/>
                </WrapperHeader>
                <WrapperBody>
                  <ListaEspacios
                    listaEspacios={JSON.parse(localStorage.getItem('listaEspaciosDisponibles')) || null}
                    onContinue={() => this.changeView(DETALLE_ESPACIO)}
                  />
                </WrapperBody>
              </WrapperBodyBlue>

            );
          case DETALLE_ESPACIO:
            return(
              <>
                <WrapperHeader>
                  <HeaderSmall onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                
                <WrapperBody>
                  <DetalleEspacio 
                    espacio={JSON.parse(localStorage.getItem('espacioSeleccionado'))}
                    onContinue={() => this.changeView(GUARDAR_DATOS)}
                  />
                </WrapperBody>
              </>
            )
          case GUARDAR_DATOS:
            return(
              < WrapperBodyBlue2>
                <WrapperHeader>
                  <HeaderSmall onBack={() => this.changeView(DETALLE_ESPACIO)}/>
                </WrapperHeader>
                <WrapperBody>
                  <CheckCarga />
                </WrapperBody>
               
              </WrapperBodyBlue2>
            )
          default:
            return '';
        }

    }
}

export default Index;