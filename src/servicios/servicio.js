import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    CustomOrigin: "savecar",
    'Access-Control-Allow-Origin': '*'
};


export const GuardarSolicitudReserva = (fechaIniReserva, totalTiempoReserva, capacidadReserva, espacio, usuario) => {
  return axios.post(
    `http://127.0.0.1:8000/api/guardar/solicitud-reserva`,
    {  
      fechaIniReserva : fechaIniReserva,
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

