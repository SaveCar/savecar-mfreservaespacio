import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    CustomOrigin: "savecar",
    'Access-Control-Allow-Origin': '*'
};


export const GuardarSolicitudReserva = (fechaIniReserva, fechaTerminoReserva, capacidadReserva,precio, espacio, usuario) => {
  return axios.post(
    `http://127.0.0.1:8000/api/guardar/solicitud-reserva`,
    {  
      fechaIniReserva : fechaIniReserva,
      fechaTerminoReserva: fechaTerminoReserva,
      capacidadReserva: capacidadReserva,
      precioReserva: precio,
      espacio : espacio,
      usuario : usuario
    },
    {
      headers,
    }
  )
}


export const ObtenerListaComunas = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/comuna`,
    {
      headers
    }
  )
}


export const ObtenerListaTipoCobro = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-cobro`,
    {
      headers
    }
  )
}


export const ObtenerListaTipoVehiculo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/vehiculo`,
    {
      headers
    }
  )
}


export const ObtenerListaTipoSuelo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-suelo`,
    {
      headers
    }
  )
}


export const ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad = (idEspacio, fInicio, fTermino, cantidad) => {
  return axios.get(
    `http://127.0.0.1:8000/api/verificar/disponibilidad/${idEspacio}/${fInicio}/${fTermino}/${cantidad}`
  )
}