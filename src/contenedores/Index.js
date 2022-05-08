import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import HeaderSmall from "../componentes/header/HeaderSmall.js";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";

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
    padding: 0px 10%;
    height: 15vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
  }
`;


export const WrapperBody = styled.div`
  padding: 0% 5%;
`;


export const WrapperBodyWhite = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  margin-top: 24%;
  @media (min-width: 370px) {
    margin-top: 22%;
  }
  @media (min-width: 400px) {
    margin-top: 20%;
  }
  @media (min-width: 450px) {
    margin-top: 18%;
  }
  @media (min-width: 490px) {
    margin-top: 16%;
  }
  @media (min-width: 550px) {
    margin-top: 14%;
  }
  @media (min-width: 640px) {
    margin-top: 16%;
  }
  @media (min-width: 720px) {
    margin-top: 14%;
  }
  @media (min-width: 820px) {
    margin-top: 12%;
  }
  @media (min-width: 960px) {
    margin-top: 9%;
  }
  @media (min-width: 1150px) {
    margin-top: 9%;
  }
  @media (min-width: 1290px) {
    margin-top: 8%;
  }
`;


const ESPACIOS_DISPONIBLES = "ListaEspacios";


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
                      />
                    </WrapperBody>
                  </>

                );
            
    
          default:
            return '';
        }

    }
}

export default Index;