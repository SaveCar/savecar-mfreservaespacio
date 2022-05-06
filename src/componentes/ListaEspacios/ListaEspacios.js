import { useEffect, useState } from "react";
import styled from "styled-components";
import Espacio from "./Espacio";
import * as Styled from "./Styles.js";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ListaEspacios = ({listaEspacios, listaVehiculos, listaServiciosEspacios}) => {

    const [espacios, setEspacios] = useState(listaEspacios);
    const [vehiculos, setVehiculos] = useState(listaVehiculos);
    const [serviciosEspacio, setServiciosEspacio] = useState(listaServiciosEspacios);
    var listaEspaciosDisponibles = []
    let nombreServicios = []
    var numeroTotal = 0;
  
    espacios.map((data, key) => {
        listaEspaciosDisponibles.push(
            <Espacio 
                direccion={data.direccionEspacio}
                tipo={
                    vehiculos.map((auto) => {
                        if (auto.idVehiculo === data.vehiculo){
                            return auto.nombreVehiculo
                        }
                    })
                }
                servicios={
                    serviciosEspacio.map((servicio) => {
                        if (servicio.idEspacio === data.idEspacio){
                            nombreServicios.push(servicio.nombreServicio)
                           
                        } 
                    })
                    && nombreServicios.join(', ')
                }
                disponible={data.libreEspacio}
                key={key}
            />
        )
    })


    return(
        <>
            { 
                espacios !== null ?
                    <Wrapper>
                        {listaEspaciosDisponibles}
                    </Wrapper>
                : 
                    <Styled.Text style={{'marginTop': '5%', 'textAlign':'center', 'color':'#00000040'}}>
                        No hay registros
                    </Styled.Text>
            }
        </>
        
        
    )
}


export default ListaEspacios;