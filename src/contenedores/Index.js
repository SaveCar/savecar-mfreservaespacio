import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import HeaderSmall from "../componentes/header/HeaderSmall.js";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio.js";

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
  padding: 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 16px 15%;
   
  }
  @media (min-width: ${maxWidth}) {
    padding: 16px 20%;
    
  }
`;


export const WrapperBodyWhite = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 91.4vh;
  padding: 16px 0px;
  @media (min-width: 405px) {
    height: 190%;;
  }

  @media (min-width: 1150px) {
    padding: 16px 15%;
    height: 180%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 16px 20%;
    height: 190%;
  }
`;


const ESPACIOS_DISPONIBLES = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";


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
              <>
                <WrapperHeader>
                  <HeaderSmall onBack={this.handleOnBack}/>
                </WrapperHeader>
                <WrapperBody>
                  <ListaEspacios
                    listaEspacios={JSON.parse(localStorage.getItem('listaEspaciosDisponibles')) || null}
                    onContinue={() => this.changeView(DETALLE_ESPACIO)}
                  />
                </WrapperBody>
              </>

            );
          case DETALLE_ESPACIO:
            return(
              <>
                <WrapperHeader>
                  <HeaderSmall onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                
                <WrapperBodyWhite>
                  <DetalleEspacio espacio={JSON.parse(localStorage.getItem('espacioSeleccionado'))}/>
                </WrapperBodyWhite>
              </>
            )
          default:
            return '';
        }

    }
}

export default Index;