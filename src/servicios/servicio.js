import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    CustomOrigin: "savecar",
    'Access-Control-Allow-Origin': '*'
};

export const ValidarCorreoElectronico = (correo) => {
  return axios.get(
    `http://127.0.0.1:8000/api/validar/correo/${correo}`,
    {
      headers,
    }
  )
}


export const GuardarUsuario = (email, password, name, apPaterno, apMaterno, perfil) => {
  return axios.post(
    `http://127.0.0.1:8000/api/guardar/usuario`,
    {  
      correoUsuario: email,
      claveUsuario: password,   
      nombreUsuario: name,   
      apPaternoUsuario: apPaterno,    
      apMaternoUsuario: apMaterno,    
      perfilUsuario: perfil
    },
    {
      headers,
    }
  )
}

