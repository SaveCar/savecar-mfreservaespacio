import React, { useEffect, useState } from "react";
import * as Styles from './styles';
import { get, useForm } from "react-hook-form";
import moment from "moment"

const SolicitarReserva = ({onContinue}) => {
  
  const dataEspacio = JSON.parse(localStorage.getItem('dataConfirmacionReservaCliente'))
  var StyleButton = {}

  const [isValid, setIsValid] = useState(false)
  const [capacidad, setCapacidad] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [fechaInicio, setFechaInicio] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [cantidadDias, setCantidadDias] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [horaInicio, setHoraInicio] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [cantidadHoras, setCantidadHoras] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [cantidadMeses, setCantidadMeses] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

  const [annioTermino, setAnnioTermino] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value' : null,
    'errorMessage':null,
    'save' : false
  })

    if (!isValid){
      StyleButton = {
        color: 'white',
        background: 'rgba(145, 149, 155, 1)',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'not-allowed',
      }
    }else{
      StyleButton = {
        color: 'white',
        background: 'rgba(0, 0, 0, 1)',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(0, 0, 0, 1)',
        cursor: 'pointer',
      }
    }

    if (dataEspacio.tipoCobro === 'Hora'){
      useEffect(() => {
        //Validar todos los campos sean validos -> desbloquear boton
        if (capacidad.save && fechaInicio.save && horaInicio.save && cantidadHoras.save){
          setIsValid(true)
        }else{
          setIsValid(false)
        }
      }, [capacidad, fechaInicio, horaInicio, cantidadHoras])
    }
  
    const handleContinue = () => {
      if (dataEspacio.tipoCobro === 'Hora'){
        const data = {
          'capacidad': capacidad,
          'fechaInicio': fechaInicio,
          'horaInicio': horaInicio,
          'cantidadHoras': cantidadHoras,
          'espacio':dataEspacio
        }
        localStorage.setItem('dataSolicitudReservaValidarCliente', JSON.stringify(data))
      }

      onContinue()
    }
    

    const handleChangeCapacidad = (e) => {
      const value = e.target.value;
      if (value === ''){
        setCapacidad((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar la capacidad que deseas reservar', isValid: false, save:false}))
      }
      if (value <= 0){
        setCapacidad((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save:false}))
      }else if (value > dataEspacio.disponible){
        setCapacidad((prevState) => ({ ...prevState, errorMessage:'Capacidad disponible es de ' + dataEspacio.disponible, isValid: false, save:false}))
      }else{
        setCapacidad((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value}))
      }
    }

    const handleChangeFechaInicio = (e) => {
      const value =  e.target.value;
      const fechaActual = new Date();
      if (value === ''){
        setFechaInicio((prevState) => ({...prevState, errorMessage:'Debes seleccionar una fecha', isValid: false, save:false}))
      }
      else if (fechaActual.getMonth() < 12){
        if (moment(value).format('yyyy') !== String(fechaActual.getFullYear())){
          setFechaInicio((prevState) => ({...prevState, errorMessage:'El año debe ser ' + fechaActual.getFullYear(), isValid: false, save:false}))
        }else if (moment(value).format('yyyy') === String(fechaActual.getFullYear())){
          //verificar mes puede ser igual o mayor
          if (parseInt(moment(value).format('MM')) < fechaActual.getMonth()){
            setFechaInicio((prevState) => ({...prevState, errorMessage:'Debes seleccionar una fecha mayor a la actual', isValid: false, save:false}))
          }else{
            //verificar dia debe ser mayor al actual
            if (parseInt(moment(value).format('DD')) <= parseInt(moment(fechaActual).format('DD'))){
              setFechaInicio((prevState) => ({...prevState, errorMessage:'Debes seleccionar una fecha mayor a la actual', isValid: false, save:false}))
            }else{
              setFechaInicio((prevState) => ({...prevState, errorMessage: null, isValid: true, save: true, value: value}))
            }
          }
        }
      }
    }

    const handleChangeCantidadDias = (e) => {
      const value = e.target.value
      if (value === ''){
        setCantidadDias((prevState) => ({ ...prevState, errorMessage: 'Debes cantidad de días que deseas reservar', isValid: false, save:false}))
      }
      if (value <= 0){
        setCantidadDias((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save:false}))
      }else if (value > 30){
        setCantidadDias((prevState) => ({ ...prevState, errorMessage:'Maximo permitido es 30 días', isValid: false, save:false}))
      }else{
        setCantidadDias((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value}))
      }
    }

    const handleChangeHoraInicio = (e) => {
      const value = e.target.value;
      if (value === ''){
        setHoraInicio((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar una hora', isValid: false, save:false}))
      }else{
        setHoraInicio((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value}))
      }
    }

    const handleChangeCantidadHoras = (e) =>{
      const value = e.target.value;
      if (value === ''){
        setCantidadHoras((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar cantidad de horas que deseas reservar', isValid: false, save:false}))
      }
      if (value <= 0){
        setCantidadHoras((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save:false}))
      }else if (value > 23){
        setCantidadHoras((prevState) => ({ ...prevState, errorMessage:'Maximo permitido es 23 horas', isValid: false, save:false}))
      }else{
        setCantidadHoras((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value}))
      }
    }

    const handleChangeCantidadMeses = (e) => {
      const value = e.target.value;
      const fechaActual = new Date();
      if (value === ''){
        setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar un mes', isValid: false, save:false}))
      }else{
        if (fechaActual.getMonth()+1 > 2){
          //validar nro meses max 11 y año === año actual + 1
          if ( moment(value).format('YYYY') === String(fechaActual.getFullYear() + 1)){
            if (parseInt(moment(value).format('MM')) <= parseInt(fechaActual.getMonth()) ){
              setCantidadMeses((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save:true, value: value}))
            }else{
              setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Máximo permitido es de 11 meses', isValid: false, save:false}))
            }
          }else if(moment(value).format('YYYY') === moment(fechaActual).format('YYYY')){
            if (parseInt(moment(value).format('MM')) >= parseInt(fechaActual.getMonth()+1) ){
              setCantidadMeses((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save:true, value: value}))
            }else{
              setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar un mes válido', isValid: false, save:false}))
            }
          }else{
            setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar un año entre ' + fechaActual.getFullYear() + ' - ' + (fechaActual.getFullYear() + 1), isValid: false,save:false}))
          }
        }
      }
    }

    const handleChangeAnnioTermino = (e) => {
      const value = e.target.value
      if (value === ''){
        setAnnioTermino((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar cantidad de años que deseas reservar', isValid: false, save:false}))
      }
      if (value <= 0){
        setAnnioTermino((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save:false}))
      }else if (value > 3){
        setAnnioTermino((prevState) => ({ ...prevState, errorMessage:'Maximo permitido es 3 años', isValid: false, save:false}))
      }else{
        setAnnioTermino((prevState) => ({ ...prevState, errorMessage: null, isValid: true,save:true, value: value}))
      }
    }

    return (
      <>
        <Styles.Wrapper>
          <Styles.WrapperTitle>
              <Styles.Title style={{'textTransform':'uppercase'}}>
                  {dataEspacio.direccion}, {dataEspacio.comuna[0].nombreComuna}
              </Styles.Title>
          </Styles.WrapperTitle>
          
          <Styles.WrapperImage src={"http://127.0.0.1:8000" + dataEspacio.imagenEspacio}/>
          <form autocomplete="off" >
            
            <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                <Styles.Label style={capacidad.isValid ? {'color':capacidad.labelSuccess} : {'color':capacidad.labelError}}>
                  Cantidad a reserva
                </Styles.Label>
                <Styles.Input
                  style={ capacidad.isValid ? {'border':capacidad.inputSuccess} : {'border':capacidad.inputError} }
                  type=""
                  name="cantidad"
                  maxLength={2}
                  placeholder="3"
                  onChange={(e) => handleChangeCapacidad(e)}
                  onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                />
            </Styles.WrapperInline>
            <Styles.Error> {capacidad.errorMessage} </Styles.Error>

            <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
              <Styles.Label style={fechaInicio.isValid ? {'color':fechaInicio.labelSuccess} : {'color':fechaInicio.labelError}}>
                  Fecha inicio de la reserva
                </Styles.Label>
                <Styles.Input 
                  type={'date'}
                  name="fechaInicio"
                  onChange={(e) => handleChangeFechaInicio(e)}
                />
            </Styles.WrapperInline>
            <Styles.Error> {fechaInicio.errorMessage} </Styles.Error>

            {/*Si es por hora la reserva*/}
            {
              dataEspacio.tipoCobro === 'Hora' &&
              <>
                <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                  <Styles.Label style={horaInicio.isValid ? {'color':horaInicio.labelSuccess} : {'color':horaInicio.labelError}}>
                      Hora de inicio
                    </Styles.Label>
                    <Styles.Input 
                      type={'time'}
                      onChange={(e) => handleChangeHoraInicio(e)}
                    />
                </Styles.WrapperInline>
                <Styles.Error> {horaInicio.errorMessage} </Styles.Error>

                <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                  <Styles.Label style={cantidadHoras.isValid ? {'color':cantidadHoras.labelSuccess} : {'color':cantidadHoras.labelError}}>
                      Cantidad de horas a reserva
                    </Styles.Label>
                    <Styles.Input 
                      type={''}
                      maxLength={2}
                      onChange={(e) => handleChangeCantidadHoras(e)}
                      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                    />
                </Styles.WrapperInline>
                <Styles.Error> {cantidadHoras.errorMessage} </Styles.Error>
              </>
            }

            {/*Si es por día la reserva*/}
            {
              dataEspacio.tipoCobro === 'Dia' &&
              <>
                <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                  <Styles.Label style={cantidadDias.isValid ? {'color':cantidadDias.labelSuccess} : {'color':cantidadDias.labelError}}>
                      Cantidad de días a reserva
                    </Styles.Label>
                    <Styles.Input 
                      type={''}
                      maxLength={2}
                      onChange={(e) => handleChangeCantidadDias(e)}
                      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                    />
                </Styles.WrapperInline>
                <Styles.Error> {cantidadDias.errorMessage} </Styles.Error>
              </>
            }
          
            {/*Si es por mes la reserva*/}
            {
              dataEspacio.tipoCobro ==='Mes' &&
              <>
                <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                  <Styles.Label style={cantidadMeses.isValid ? {'color':cantidadMeses.labelSuccess} : {'color':cantidadMeses.labelError}}>
                      Mes de término de la reserva
                    </Styles.Label>
                    <Styles.Input 
                      type={'month'}
                      onChange={(e) => handleChangeCantidadMeses(e)}
                    />
                </Styles.WrapperInline>
                <Styles.Error> {cantidadMeses.errorMessage} </Styles.Error>
              </>
            }

            {/*Si es por año la reserva*/}
            {
              dataEspacio.tipoCobro === 'Año' &&
              <>
                <Styles.WrapperInline style={{ 'marginBottom':'0px'}}>
                  <Styles.Label style={annioTermino.isValid ? {'color':annioTermino.labelSuccess} : {'color':annioTermino.labelError}}>
                      Año de término de la reserva
                    </Styles.Label>
                    <Styles.Input 
                      type={''}
                      maxLength={'4'} 
                      placeholder="2023"
                      onChange={(e) => handleChangeAnnioTermino(e)}
                    />
                </Styles.WrapperInline>
                <Styles.Error> {annioTermino.errorMessage} </Styles.Error>
              </>
            }
           
            <Styles.WrapperButton>
                <Styles.Button
                  style={ {'color': StyleButton.color, 'background': StyleButton.background, 'transition': StyleButton.transition, 'border': StyleButton.border, 'cursor': StyleButton.cursor}}
                  disabled={!isValid}
                  onClick={() => handleContinue()}
                >
                  REGISTRAR
                </Styles.Button>
              </Styles.WrapperButton>
            </form>

          </Styles.Wrapper>
          </>
      )
    
}
export default SolicitarReserva;