import styled from "styled-components";
import { rem } from "polished";
import { useEffect, useState } from "react";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const maxWidth = rem("1200px");

const Spinner = styled.div`
    display: block;
    border: 10px solid #647B9A;
    border-top: 10px solid #304562;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    margin-top: 20% !important;
    margin: auto;
    animation: spin 2s linear infinite;
    margin-bottom: 7%;
    @media (min-width: ${minWidth1}) {
      border: 11px solid #647B9A;
      border-top: 11px solid #304562;
      height: 90px;
      width: 90px;
    }
    @media (min-width: ${minWidth2}) {
      border: 12px solid #647B9A;
      border-top: 12px solid #304562;
      height: 100px;
      width: 100px;
      margin-top: 13% !important;
    }
    @media (min-width: ${maxWidth}) {
      margin-top: 10% !important;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

const Wrapper = styled.div`
    display: block;
`;

const Title = styled.h1`
  color: #304562;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  font-family: rubik;
  margin-top: 10px;
  @media (min-width: ${minWidth1}) {
    font-size: 35px;
    margin-top: 15px;
  }
  @media (min-width: ${minWidth2}) {
    margin-top: 0px;
    font-size: 41px;
`;

const SubTitle = styled.h2`
  color: #304562;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  font-family: rubik;
  margin-top: 15px;
  @media (min-width: ${minWidth1}) {
    font-size: 25px;
    margin-top: 20px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 30px;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #304562;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 0px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
  }
`;




const CargarFiltros = ({onContinue}) => {

    useEffect(() => {
      const filtros = JSON.parse(localStorage.getItem('filtrosBusquedaEspacio'));
      const listaFiltrosAplicados = [];

      if (filtros.comuna === null && filtros.cobro === null && filtros.vehiculo === null && filtros.suelo === null && filtros.techo === null){
        setTimeout(() => {
          onContinue();
        }, 1000)
      }

      if (filtros.comuna !== null){
        listaFiltrosAplicados.push('comuna')
      }

      

      //listaEspaciosFiltrados
      
    },[])

    return (
        <>
          <Wrapper>
              <Spinner/>
              <Title/>
              <SubTitle>
                Buscando espacio
              </SubTitle>
              <Text>
                  Puede demorar unos minutos
              </Text>
          </Wrapper>
        </>
    );
  };
  
  export default CargarFiltros;