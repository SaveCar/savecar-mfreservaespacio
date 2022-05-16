import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import HeaderSmall from "../componentes/header/HeaderSmall.js";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio.js";
import CheckCarga from "./../componentes/CheckCarga/CheckCarga.js";
import FiltrosBusqueda from "./../componentes/FiltrosBusqueda/FiltrosBusqueda.js";
import { ObtenerListaComunas, ObtenerListaTipoCobro, ObtenerListaTipoSuelo, ObtenerListaTipoVehiculo } from "../servicios/servicio.js";
import CargarFiltros from "./../componentes/CheckCarga/CargarFiltros";

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
  position: absolute;
  width:100%;
  height: 100vh;
  @media (min-width: ${maxWidth}) {
    height: auto;
  }
`;

const WrapperBodyBlue2 = styled.div`
  background: #C4D7F1 !important;
  height: 100vh;
  position: absolute;
  width:100%;
  @media (min-width: ${maxWidth}) {
    height: auto;
  }
`;

export const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  cursor: pointer;
  padding: 2% 6%;
  margin-top: 16px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    padding: 2% 6%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 1.6% 6%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 1.4% 6%;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 94.5%;
  @media (min-width: ${minWidth1}) {
    width: 89.5%;
  }
  @media (min-width: ${minWidth2}) {
    width: 84.5%;
  }
  @media (min-width: ${minWidth3}) {
    width: 79.5%;
  }
  @media (min-width: ${maxWidth}) {
    width: 74.5%;
  }
`;

const Line = styled.hr`
  background: rgba(203, 187, 161, 0.6);
  border: 1px solid rgba(203, 187, 161, 0.6);
  width: 90%;
  margin-top: 2%;
  @media (min-width: ${minWidth1}) {
    width: 80%;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
  }
  @media (min-width: ${minWidth3}) {
    width: 60%;
  }
  @media (min-width: ${maxWidth}) {
    width: 50%;
  }
`;

const ESPACIOS_DISPONIBLES = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";
const GUARDAR_DATOS = "CheckCarga";
const FILTRAR_ESPACIOS = "FiltrosBusqueda";
const CARGAR_FILTROS = "CargarFiltros";


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

    handleFilterEspacio = () => {
      //recuperar lista de comunas
      ObtenerListaComunas()
        .then((res) => {
          localStorage.setItem('listaComunasFiltro', JSON.stringify(res.data))
        })
        .catch(() => {
          localStorage.removeItem('listaComunasFiltro')
        })
      //recuperar lista de tipo cobro
      ObtenerListaTipoCobro()
        .then((res) => {
          localStorage.setItem('listaTipoCobroFiltro', JSON.stringify(res.data))
        })
        .catch(() => {
          localStorage.removeItem('listaTipoCobroFiltro')
        })
      //recuperar tipo vehiculo
      ObtenerListaTipoVehiculo()
        .then((res) => {
          localStorage.setItem('listaVehiculosFiltro', JSON.stringify(res.data))
        })
        .catch(() => {
          localStorage.removeItem('listaVehiculosFiltro')
        })
      //recuperar tipo suelo
      ObtenerListaTipoSuelo()
        .then((res) => {
          localStorage.setItem('listaTipoSueloFiltro', JSON.stringify(res.data))
        })
        .catch(() => {
          localStorage.removeItem('listaTipoSueloFiltro')
        })

      this.changeView(FILTRAR_ESPACIOS)
    }


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
                  {
                    /*<WrapperButton>
                      <Button
                        onClick={() => this.handleFilterEspacio()}
                      >Filtrar</Button>
                    </WrapperButton>

                    <Line/>*/
                  }
                  <ListaEspacios
                    listaEspacios={ JSON.parse(localStorage.getItem('listaEspaciosFiltrados')) || JSON.parse(localStorage.getItem('listaEspaciosDisponibles'))}
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
                  <HeaderSmall />
                </WrapperHeader>
                <WrapperBody style={{'padding':'0px 16px'}}>
                  <CheckCarga />
                </WrapperBody>
               
              </WrapperBodyBlue2>
            )
          case FILTRAR_ESPACIOS:
            return(
              <>
                <WrapperHeader>
                  <HeaderSmall onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                
                <WrapperBody>
                  <FiltrosBusqueda
                    onContinue={() => this.changeView(CARGAR_FILTROS)}
                  />
                </WrapperBody>
              </>
            )
          case CARGAR_FILTROS:
            return(
              < WrapperBodyBlue2>
                <WrapperHeader>
                  <HeaderSmall/>
                </WrapperHeader>
                <WrapperBody>
                  <CargarFiltros onContinue={() => this.changeView(ESPACIOS_DISPONIBLES)} />
                </WrapperBody>
               
              </WrapperBodyBlue2>
            )
          default:
            return '';
        }

    }
}

export default Index;