import styled from "styled-components";
import { rem } from "polished";
import { useEffect, useState } from "react";
import { GuardarUsuario } from "../../servicios/servicio";
import Mensaje from "../Mensaje/Mensaje";


const minWidth = rem("640px");
const maxWidth = rem("1200px");

const Spinner = styled.div`
    display: block;
    border: 16px solid #647B9A;
    border-top: 16px solid #304562;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin-top: 15% !important;
    margin: auto;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

`;

const Wrapper = styled.div`
    display: block;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #304562;
  font-weight: 600;
  font-family: rubik;
  @media (min-width: ${minWidth}) {
    font-size: 45px;
    margin-left: 10px;
    margin-top: 24px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 53px;
    margin-left: 14px;
    margin-top: 10px;
  }
`;

const SubTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  color: #304562;
  font-weight: 500;
  font-family: rubik;
  margin: 0px;
  padding-top: 15px;
  @media (min-width: ${minWidth}) {
    font-size: 30px;
    padding-top: 9px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 38px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #304562;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 20px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 25px;
  }
`;




const CheckCarga = () => {

    const [respuesta, setRespuesta] = useState(null);

    useEffect(() => {
        setTimeout(function() {
          const datosSolicitud = JSON.parse(localStorage.getItem('datosSolicitudReserva'))
          console.log(datosSolicitud)
          //calcular fecha de termino
          /**
           switch (datosSolicitud.tipoCobro){
             case (Media Hora):
               return ()
              case (Hora):
                return ()
              case (Día):
                returb()
              case (Año):
                return ()
              default: 
                return()
            }
           */
          /*
            Guadar en bd => GuardarSolicitudReserva
          */
        },3000);
    },[])

    return (
        <>
            { 
                respuesta === null ?
                    <Wrapper>
                        <Spinner/>
                        <Title/>
                        <SubTitle>
                            Enviando solicitud
                        </SubTitle>
                        <Text>
                            Puede demorar unos minutos
                        </Text>
                    </Wrapper>

                : 
                    respuesta ?
                        <Mensaje title={'Felicidades'} subtitle={'Cuenta registrada'} text={'Serás redireccionado en un momento'} tipo={'exito'} />
                :
                    <Mensaje title={'Lo sentimos'} subtitle={'Ocurrió un error'} text={'Vuelve a intentarlo más tarde'} tipo={'error'} />
            }
        </>
      
    );
  };
  
  export default CheckCarga;