import { useEffect, useState } from "react";
import styled from "styled-components";
import Espacio from "./Espacio";
import * as Styled from "./Styles.js";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
`;

export const ListaEspacios = ({listaEspacios, onContinue}) => {

    const [espacios, setEspacios] = useState(listaEspacios);
    var listaEspaciosDisponibles = []
    
    
    if (espacios !== null) {
        espacios.map((data, key) => {
            listaEspaciosDisponibles.push(
                <Espacio 
                    direccion={data.direccion}
                    precio={data.precio}
                    tipoCobro={data.tipoCobro}
                    comuna={data.comuna}
                    tipo={data.vehiculo}
                    disponible={data.disponible}
                    imagen={data.imagenEspacio}
                    key={key}
                    espacio={data}
                    onContinue={onContinue}
                />
            )

        })
    }
    


    return(
        <>
            { 
                espacios !== null ?
                    <Wrapper style={{'marginBottom':'2%'}}>
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