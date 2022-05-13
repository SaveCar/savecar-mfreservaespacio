import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import HeaderSmall from "../componentes/header/HeaderSmall.js";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio.js";
import CheckCarga from "./../componentes/CheckCarga/CheckCarga.js"

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  padding: 16px;
  background: #304562;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 0px 15%;
    height: 15vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 20%;
  }
`;


export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 16px 15%;
   
  }
  @media (min-width: ${maxWidth}) {
    padding: 16px 20%;
    
  }
`;


export const WrapperBodyBlue = styled.div`
  background: #C4D7F1 !important;
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
              < div style={{'background':'#C4D7F1','height':'100vh'}}>
                <WrapperHeader>
                  <HeaderSmall onBack={this.handleOnBack}/>
                </WrapperHeader>
                <WrapperBody>
                  <ListaEspacios
                    listaEspacios={JSON.parse(localStorage.getItem('listaEspaciosDisponibles')) || null}
                    onContinue={() => this.changeView(DETALLE_ESPACIO)}
                  />
                </WrapperBody>
              </div>

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
              < div style={{'background':'#C4D7F1','height':'100vh'}}>
                <WrapperHeader>
                  <HeaderSmall onBack={() => this.changeView(DETALLE_ESPACIO)}/>
                </WrapperHeader>
                <WrapperBody>
                  <CheckCarga
                    
                  />
                </WrapperBody>
              </div>
            )
          default:
            return '';
        }

    }
}

export default Index;