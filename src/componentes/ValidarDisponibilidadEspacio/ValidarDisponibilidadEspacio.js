import styled from "styled-components";
import { rem } from "polished";
import { useEffect, useState } from "react";
import { GuardarSolicitudReserva, GuardarUsuario, ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad } from "../../servicios/servicio";
import Mensaje from "../Mensaje/Mensaje";
import moment, { invalid } from "moment";


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




const ValidarDisponibilidadEspacio = ({onBack}) => {

    const [respuesta, setRespuesta] = useState(null);

    useEffect(() => {
      setTimeout(() => 
      {
        const dataSolicitud = JSON.parse(localStorage.getItem('dataSolicitudReservaValidarCliente'))
        const idUsuario = JSON.parse(localStorage.getItem('userData')).data.idUsuario;
        const precio =dataSolicitud.precio;


        switch (dataSolicitud.tipoCobro){
          case 'Dia':
            let fechaInicio = dataSolicitud.fechaInicio.value
            let idEspacio = dataSolicitud.espacio.idEspacio
            let cantidadDias = dataSolicitud.cantidadDias.value
            let cantidadEspacio = dataSolicitud.capacidad.value

            let fechaTermino = new Date(fechaInicio)
            fechaTermino.setDate(fechaTermino.getDate() + parseInt(cantidadDias))
            fechaTermino = moment(fechaTermino).format('YYYY-MM-DD')

            ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad(idEspacio,fechaInicio,fechaTermino,cantidadEspacio)
              .then((res) => {
                if (res.data.respuesta){
                  //guardar 
                  GuardarSolicitudReserva(fechaInicio, fechaTermino, cantidadEspacio,precio, idEspacio,idUsuario)
                    .then((res) => {
                      if (res.status === 200){
                        setRespuesta(true)
                      }
                      else{
                        setRespuesta('invalid')
                      }
                    })
                    .catch((e) => {
                      setRespuesta('invalid')
                    })
                }else{
                  setRespuesta(false)
                }
              })
              .catch((e) => {
                console.log(e)
                setRespuesta('invalid')
              })
            break;

          case 'Mes':
            let fechaInicioM = dataSolicitud.fechaInicio.value
            let idEspacioM = dataSolicitud.espacio.idEspacio
            let cantidadMeses = dataSolicitud.cantidadMeses.value
            let cantidadEspacioM = dataSolicitud.capacidad.value

            let fechaTerminoM = new Date(fechaInicioM)
            fechaTerminoM.setMonth(fechaTerminoM.getMonth() + parseInt(cantidadMeses))
            fechaTerminoM = moment(fechaTerminoM).format('YYYY-MM-DD')
            
            ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad(idEspacioM,fechaInicioM,fechaTerminoM,cantidadEspacioM)
              .then((res) => {
                if (res.data.respuesta){
                  //guardar 
                  GuardarSolicitudReserva(fechaInicioM, fechaTerminoM, cantidadEspacioM,precio, idEspacioM,idUsuario)
                    .then((res) => {
                      if (res.status === 200){
                        setRespuesta(true)
                      }
                      else{
                        setRespuesta('invalid')
                      }
                    })
                    .catch((e) => {
                      setRespuesta('invalid')
                    })
                }else{
                  setRespuesta(false)
                }

              })
              .catch((e) => {
                console.log(e)
                setRespuesta('invalid')
              })
            break;

          case 'Año':
            let fechaInicioA = dataSolicitud.fechaInicio.value
            let idEspacioA = dataSolicitud.espacio.idEspacio
            let cantidadAnnios = dataSolicitud.cantidadAnnios.value
            let cantidadEspacioA = dataSolicitud.capacidad.value

            let fechaTerminoA= new Date(fechaInicioA)
            fechaTerminoA.setFullYear(fechaTerminoA.getFullYear() + parseInt(cantidadAnnios))
            fechaTerminoA = moment(fechaTerminoA).format('YYYY-MM-DD')

            ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad(idEspacioA,fechaInicioA,fechaTerminoA,cantidadEspacioA)
              .then((res) => {
                if (res.data.respuesta){
                  //guardar 
                  GuardarSolicitudReserva(fechaInicioA, fechaTerminoA, cantidadEspacioA,precio, idEspacioA,idUsuario)
                    .then((res) => {
                      if (res.status === 200){
                        setRespuesta(true)
                      }
                      else{
                        setRespuesta('invalid')
                      }
                    })
                    .catch((e) => {
                      setRespuesta('invalid')
                    })
                }else{
                  setRespuesta(false)
                }

              })
              .catch((e) => {
                console.log(e)
                setRespuesta('invalid')
              })
            break;

          default:
            console.log('nada')
            break;
        }
      },[2000])
      
    },[])

    return (
        <>
            { 
                respuesta === null ?
                    <Wrapper>
                        <Spinner/>
                        <Title/>
                        <SubTitle>
                            Verificando disponibilidad del espacio
                        </SubTitle>
                        <Text>
                            Puede demorar unos minutos
                        </Text>
                    </Wrapper>

                : 
                    respuesta ?
                      <Mensaje title={'Felicidades'} subtitle={'Solicitud enviada'} text={'Gracias por preferirno, esperamos poder ayudarte'} tipo={'exito'} />
                :   !respuesta ?
                    <Mensaje title={'Lo sentimos'} subtitle={'Espacio no disponible'} text={'¡No te preocupes, un nuevo espacio espera por ti!'} tipo={'ocupado'} onRedirect={onBack} />
                : 
                    <Mensaje title={'Lo sentimos'} subtitle={'Ocurrió un error'} text={'Vuelve a intentarlo más tarde'} tipo={'error'} />
            }
        </>
      
    );
  };
  
  export default ValidarDisponibilidadEspacio;