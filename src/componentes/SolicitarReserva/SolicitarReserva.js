import React, { useEffect, useState } from "react";
import * as Styles from './styles';
import { get, useForm } from "react-hook-form";
import moment from "moment"

const SolicitarReserva = ({ onContinue }) => {

  const dataEspacio = JSON.parse(localStorage.getItem('dataConfirmacionReservaCliente'))
  var StyleButton = {}
  const [valor, setValor] = useState(0)

  const [isValid, setIsValid] = useState(false)
  const [capacidad, setCapacidad] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value': null,
    'errorMessage': null,
    'save': false
  })

  const [fechaInicio, setFechaInicio] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value': null,
    'errorMessage': null,
    'save': false
  })

  const [cantidadDias, setCantidadDias] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value': null,
    'errorMessage': null,
    'save': false
  })

  const [cantidadMeses, setCantidadMeses] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value': null,
    'errorMessage': null,
    'save': false
  })

  const [annioTermino, setAnnioTermino] = useState({
    'labelSuccess': 'rgba(0, 0, 0, 1)',
    'inputSuccess': '1px solid rgba(0, 0, 0, 1)',
    'labelError': 'rgba(215, 32, 32, 1)',
    'inputError': '1px solid rgba(215, 32, 32, 1)',
    'isValid': true,
    'value': null,
    'errorMessage': null,
    'save': false
  })

  if (!isValid) {
    StyleButton = {
      color: 'white',
      background: 'rgba(145, 149, 155, 1)',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'not-allowed',
    }
  } else {
    StyleButton = {
      color: 'white',
      background: 'rgba(0, 0, 0, 1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 1)',
      cursor: 'pointer',
    }
  }

  if (dataEspacio.tipoCobro === 'Dia') {
    useEffect(() => {
      //Validar todos los campos sean validos -> desbloquear boton
      if (capacidad.save && fechaInicio.save && cantidadDias.save) {
        setValor((parseInt(capacidad.value) * parseInt(cantidadDias.value) * dataEspacio.precio))
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }, [capacidad, fechaInicio, cantidadDias])
  }

  if (dataEspacio.tipoCobro === 'Mes') {
    useEffect(() => {
      //Validar todos los campos sean validos -> desbloquear boton
      if (capacidad.save && fechaInicio.save && cantidadMeses.save) {
        setValor((parseInt(capacidad.value) * parseInt(cantidadMeses.value) * dataEspacio.precio))
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }, [capacidad, fechaInicio, cantidadMeses])
  }

  if (dataEspacio.tipoCobro === 'Año') {
    useEffect(() => {
      //Validar todos los campos sean validos -> desbloquear boton
      if (capacidad.save && fechaInicio.save && annioTermino.save) {
        setValor((parseInt(capacidad.value) * parseInt(annioTermino.value) * dataEspacio.precio))
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }, [capacidad, fechaInicio, annioTermino])
  }

  const handleContinue = () => {
    if (dataEspacio.tipoCobro === 'Dia') {
      const data = {
        'tipoCobro' : 'Dia',
        'capacidad': capacidad,
        'fechaInicio': fechaInicio,
        'cantidadDias': cantidadDias,
        'espacio': dataEspacio,
        'precio': valor
      }
      localStorage.setItem('dataSolicitudReservaValidarCliente', JSON.stringify(data))
    }
    if (dataEspacio.tipoCobro === 'Mes') {
      const data = {
        'tipoCobro' : 'Mes',
        'capacidad': capacidad,
        'fechaInicio': fechaInicio,
        'cantidadMeses': cantidadMeses,
        'espacio': dataEspacio,
        'precio': valor
      }
      localStorage.setItem('dataSolicitudReservaValidarCliente', JSON.stringify(data))
    }
    if (dataEspacio.tipoCobro === 'Año') {
      const data = {
        'tipoCobro' : 'Año',
        'capacidad': capacidad,
        'fechaInicio': fechaInicio,
        'cantidadAnnios': annioTermino,
        'espacio': dataEspacio,
        'precio': valor
      }
      localStorage.setItem('dataSolicitudReservaValidarCliente', JSON.stringify(data))
    }
  
  onContinue()
}


const handleChangeCapacidad = (e) => {
  const value = e.target.value;
  if (value === '') {
    setCapacidad((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar la capacidad que deseas reservar', isValid: false, save: false }))
  }
  if (value <= 0) {
    setCapacidad((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save: false }))
  } else if (value > dataEspacio.capacidad) {
    setCapacidad((prevState) => ({ ...prevState, errorMessage: 'Capacidad máxima es ' + dataEspacio.capacidad, isValid: false, save: false }))
  } else {
    setCapacidad((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value }))
  }
}

const handleChangeFechaInicio = (e) => {
  const value = e.target.value;
  const fechaActual = new Date();
  if (value === '') {
    setFechaInicio((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar una fecha', isValid: false, save: false }))
  }
  else{
    if ((fechaActual.getMonth()+1) < 12) {
      if (moment(value).format('yyyy') !== String(fechaActual.getFullYear())) {
        setFechaInicio((prevState) => ({ ...prevState, errorMessage: 'El año debe ser ' + fechaActual.getFullYear(), isValid: false, save: false }))
      } else if (moment(value).format('yyyy') === String(fechaActual.getFullYear())) {
        //verificar mes puede ser igual o mayor
        if (parseInt(moment(value).format('MM')) < (fechaActual.getMonth()+1)) {
          setFechaInicio((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar una fecha mayor a la actual', isValid: false, save: false }))
        } else {
          //verificar dia debe ser mayor al actual
          if (parseInt(moment(value).format('MM')) === (fechaActual.getMonth()+1) && parseInt(moment(value).format('DD')) <= parseInt(moment(fechaActual).format('DD'))) {
            setFechaInicio((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar una fecha mayor a la actual', isValid: false, save: false }))
          } else {
            setFechaInicio((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value }))
          }
        }
      }
    }
  }
  
}

const handleChangeCantidadDias = (e) => {
  const value = e.target.value
  if (value === '') {
    setCantidadDias((prevState) => ({ ...prevState, errorMessage: 'Debes cantidad de días que deseas reservar', isValid: false, save: false }))
  }
  if (value <= 0) {
    setCantidadDias((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save: false }))
  } else if (value > 5) {
    setCantidadDias((prevState) => ({ ...prevState, errorMessage: 'Maximo permitido es 5 días', isValid: false, save: false }))
  } else {
    setCantidadDias((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value }))
  }
}

const handleChangeCantidadMeses = (e) => {
  const value = e.target.value;
  const fechaActual = new Date();
  if (value === '') {
    setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Debes seleccionar un mes', isValid: false, save: false }))
  } 
  if (value <= 0) {
    setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save: false }))
  } else if (value > 3) {
    setCantidadMeses((prevState) => ({ ...prevState, errorMessage: 'Maximo permitido es 3 meses', isValid: false, save: false }))
  } else {
    setCantidadMeses((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value }))
  }
}

const handleChangeAnnioTermino = (e) => {
  const value = e.target.value
  if (value === '') {
    setAnnioTermino((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar cantidad de años que deseas reservar', isValid: false, save: false }))
  }
  if (value <= 0) {
    setAnnioTermino((prevState) => ({ ...prevState, errorMessage: 'Debes ingresar un número válido', isValid: false, save: false }))
  } else if (value > 3) {
    setAnnioTermino((prevState) => ({ ...prevState, errorMessage: 'Maximo permitido es 3 años', isValid: false, save: false }))
  } else {
    setAnnioTermino((prevState) => ({ ...prevState, errorMessage: null, isValid: true, save: true, value: value }))
  }
}

  return (
    <>
      <Styles.Wrapper>
        <Styles.WrapperTitle>
          <Styles.Title style={{ 'textTransform': 'uppercase' }}>
            {dataEspacio.direccion}, {dataEspacio.comuna[0].nombreComuna}
          </Styles.Title>
        </Styles.WrapperTitle>

        <Styles.WrapperImage src={"http://127.0.0.1:8000" + dataEspacio.imagenEspacio} />
        <form autocomplete="off" >

          <Styles.WrapperInline style={{ 'marginBottom': '0px' }}>
            <Styles.Label style={capacidad.isValid ? { 'color': capacidad.labelSuccess } : { 'color': capacidad.labelError }}>
              Cantidad a reserva
            </Styles.Label>
            <Styles.Input
              style={capacidad.isValid ? { 'border': capacidad.inputSuccess } : { 'border': capacidad.inputError }}
              type=""
              name="cantidad"
              maxLength={2}
              placeholder="3"
              onChange={(e) => handleChangeCapacidad(e)}
              onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
            />
          </Styles.WrapperInline>
          <Styles.Error> {capacidad.errorMessage} </Styles.Error>

          <Styles.WrapperInline style={{ 'marginBottom': '0px' }}>
            <Styles.Label style={fechaInicio.isValid ? { 'color': fechaInicio.labelSuccess } : { 'color': fechaInicio.labelError }}>
              Fecha inicio de la reserva
            </Styles.Label>
            <Styles.Input
              type={'date'}
              name="fechaInicio"
              onChange={(e) => handleChangeFechaInicio(e)}
            />
          </Styles.WrapperInline>
          <Styles.Error> {fechaInicio.errorMessage} </Styles.Error>

          {/*Si es por día la reserva*/}
          {
            dataEspacio.tipoCobro === 'Dia' &&
            <>
              <Styles.WrapperInline style={{ 'marginBottom': '0px' }}>
                <Styles.Label style={cantidadDias.isValid ? { 'color': cantidadDias.labelSuccess } : { 'color': cantidadDias.labelError }}>
                  Cantidad de días a reservar
                </Styles.Label>
                <Styles.Input
                  type={''}
                  maxLength={1}
                  placeholder={'2'}
                  onChange={(e) => handleChangeCantidadDias(e)}
                  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                />
              </Styles.WrapperInline>
              <Styles.Error> {cantidadDias.errorMessage} </Styles.Error>
            </>
          }

          {/*Si es por mes la reserva*/}
          {
            dataEspacio.tipoCobro === 'Mes' &&
            <>
              <Styles.WrapperInline style={{ 'marginBottom': '0px' }}>
                <Styles.Label style={cantidadMeses.isValid ? { 'color': cantidadMeses.labelSuccess } : { 'color': cantidadMeses.labelError }}>
                  Cantidad de meses a reservar
                </Styles.Label>
                <Styles.Input
                  type={''}
                  maxLength={1}
                  placeholder={'2'}
                  onChange={(e) => handleChangeCantidadMeses(e)}
                  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                />
              </Styles.WrapperInline>
              <Styles.Error> {cantidadMeses.errorMessage} </Styles.Error>
            </>
          }

          {/*Si es por año la reserva*/}
          {
            dataEspacio.tipoCobro === 'Año' &&
            <>
              <Styles.WrapperInline style={{ 'marginBottom': '0px' }}>
                <Styles.Label style={annioTermino.isValid ? { 'color': annioTermino.labelSuccess } : { 'color': annioTermino.labelError }}>
                  Año de término de la reserva
                </Styles.Label>
                <Styles.Input
                  type={''}
                  maxLength={1}
                  placeholder={'2'}
                  onChange={(e) => handleChangeAnnioTermino(e)}
                  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                />
              </Styles.WrapperInline>
              <Styles.Error> {annioTermino.errorMessage} </Styles.Error>
            </>
          }

          <Styles.WrapperDiv style={{'marginTop':'5%'}}>
            <Styles.LineSmall/>
            
              <Styles.WrapperInline> 
                <Styles.Label style={{'width':'auto'}}>
                  <b>Valor total:</b>
                </Styles.Label>
                <Styles.Label style={{'width':'auto'}}>
                  ${valor}
                </Styles.Label>
              </Styles.WrapperInline>
            
          </Styles.WrapperDiv>

          <Styles.WrapperButton>
            <Styles.Button
              style={{ 'color': StyleButton.color, 'background': StyleButton.background, 'transition': StyleButton.transition, 'border': StyleButton.border, 'cursor': StyleButton.cursor }}
              disabled={!isValid}
              onClick={() => handleContinue()}
            >
              SOLICITAR RESERVA
            </Styles.Button>
          </Styles.WrapperButton>
        </form>

      </Styles.Wrapper>
    </>
  )
    
}
export default SolicitarReserva;