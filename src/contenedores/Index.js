import React, {Component} from "react";
import * as singleSpa from "single-spa";
import styled from "styled-components";
import { rem } from "polished";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios.js";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio.js";
import CheckCarga from "./../componentes/CheckCarga/CheckCarga.js";
import FiltrosBusqueda from "./../componentes/FiltrosBusqueda/FiltrosBusqueda.js";
import { ObtenerListaComunas, ObtenerListaTipoCobro, ObtenerListaTipoSuelo, ObtenerListaTipoVehiculo } from "../servicios/servicio.js";
import Header from "../../../savecar-mfregistrousuario/src/componentes/header/Header.js";
import SolicitarReserva from "../componentes/SolicitarReserva/SolicitarReserva.js";
import ValidarDisponibilidadEspacio from "../componentes/ValidarDisponibilidadEspacio/ValidarDisponibilidadEspacio.js";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px"); 

export const WrapperHeader = styled.div`
  background: rgba(0, 0, 0, 1);
  padding: 0px 16px;
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
const WrapperBody = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin:auto;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    width: 80%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth3}) {
    width: 60%;
    margin-bottom: 24px;
  }
  @media (min-width: ${maxWidth}) {
    width: 50%;
  }
`;


const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #000000;
  font-weight: 600;
  font-family: rubik;
  margin-top: 10px;
  @media (min-width: ${minWidth1}) {
    font-size: 37px;
    margin-top: 15px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 43px;
  }
`;


const ESPACIOS_DISPONIBLES = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";
const GUARDAR_DATOS = "CheckCarga";
const FILTRAR_ESPACIOS = "FiltrosBusqueda";
const CARGAR_FILTROS = "CargarFiltros";
const SOLICITAR_RESERVA = "SolicitarReserva";
const VALIDAR_DISPONIBILIDAD = "ValidarDisponibilidadEspacio";
const CONFIRMAR_DATOS = "";


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
              <>
                <WrapperHeader>
                  <Header onBack={this.handleOnBack}/>
                </WrapperHeader>
                <WrapperBody>
                  <Title style={{'marginBottom':'0px'}}>Espacios disponibles</Title>
                  <ListaEspacios
                    listaEspacios={ JSON.parse(localStorage.getItem('listaEspaciosFiltrados')) || JSON.parse(localStorage.getItem('listaEspaciosDisponibles'))}
                    onContinue={() => this.changeView(DETALLE_ESPACIO)}
                  />
                </WrapperBody>
              </>

            );
          case DETALLE_ESPACIO:
            return(
              <>
                <WrapperHeader>
                  <Header onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                <WrapperBody>
                  <DetalleEspacio 
                    espacio={JSON.parse(localStorage.getItem('espacioSeleccionado'))}
                    onContinue={() => this.changeView(SOLICITAR_RESERVA)}
                  />
                </WrapperBody>
              </>
            )
          case SOLICITAR_RESERVA:
            return(
              <>
                <WrapperHeader>
                  <Header onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                <WrapperBody>
                  <SolicitarReserva 
                    onContinue={() => this.changeView(VALIDAR_DISPONIBILIDAD)}
                  />
                </WrapperBody>
              </>
            )
          case VALIDAR_DISPONIBILIDAD:
            return(
              <>
                 <WrapperHeader>
                  <Header/>
                </WrapperHeader>

                <WrapperBody style={{'padding':'0px 16px'}}>
                  <ValidarDisponibilidadEspacio onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperBody>
              </>
            )
          case GUARDAR_DATOS:
            return(
              <>
                <WrapperHeader>
                  <Header/>
                </WrapperHeader>

                <WrapperBody style={{'padding':'0px 16px'}}>
                  <CheckCarga />
                </WrapperBody>
              </>
            )
          case FILTRAR_ESPACIOS:
            return(
              <>
                <WrapperHeader>
                  <Header onBack={() => this.changeView(ESPACIOS_DISPONIBLES)}/>
                </WrapperHeader>
                
                <WrapperBody>
                  <FiltrosBusqueda
                    onContinue={() => this.changeView(CARGAR_FILTROS)}
                  />
                </WrapperBody>
              </>
            )
          default:
            return '';
        }

    }
}

export default Index;