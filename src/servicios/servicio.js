import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    CustomOrigin: "savecar",
    'Access-Control-Allow-Origin': '*'
};


export const GuardarSolicitudReserva = (fechaIniReserva, fechaFinReserva, totalTiempoReserva, capacidadReserva, apMaespacioterno, usuario) => {
  return axios.post(
    `http://127.0.0.1:8000/api/guardar/solicitud-reserva`,
    {  
      fechaIniReserva : fechaIniReserva,
      fechaFinReserva : fechaFinReserva,
      totalTiempoReserva: totalTiempoReserva, 
      capacidadReserva: capacidadReserva,
      espacio : espacio,
      usuario : usuario
    },
    {
      headers,
    }
  )
}

