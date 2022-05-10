import * as Styles from "./Styles.js";
import arrow_down from "./../../icon/arrow_down.png";
import arrow_up from "./../../icon/arrow_up.png";
import { useEffect, useState } from "react";
import FondoOpaco from "../Modal/FondoOpaco.js";
import Modal from "../Modal/Modal.js";

export const DetalleEspacio = ({espacio}) => {

    const[descripcionDisabled, setDescripcionDisabled] = useState(true)
    const[comentarioDisabled, setComentarioDisabled] = useState(true)
    const [mainState, setMainState] = useState({
        isModalOpen: false,
        isModalClose: false
    });
    var listaServiciosEspacio = []

 
    if (espacio.listaServicios.length > 0) {
        espacio.listaServicios.map(data => {
            listaServiciosEspacio.push(data.nombre)
        })
    }

    const handleDescription = () => {
        if(descripcionDisabled){
            console.log('mostrar descripcion')
            setDescripcionDisabled(false)
        }else{
            console.log('ocultar descripcion')
            setDescripcionDisabled(true)
        }
    }

    
    const openModal = () => {
        setMainState((prev) => ({ ...prev, ["isModalOpen"]: true }));
    };

  

    return(
        <>
            <Styles.Wrapper>
                <Modal
                    isOpen={mainState.isModalOpen}
                    onClose={() =>
                        setMainState((prev) => ({ ...prev, ["isModalOpen"]: false }))
                    }
                    image={"http://127.0.0.1:8000" + espacio.imagenEspacio}
                    disponible={espacio.disponible}
                    setMainState={setMainState}
                />
                <Styles.WrapperTitle>
                    <Styles.Title style={{'textTransform':'uppercase'}}>
                        {espacio.direccion}, {espacio.comuna[0].nombreComuna}
                    </Styles.Title>
                </Styles.WrapperTitle>
                
                <Styles.WrapperImage src={"http://127.0.0.1:8000" + espacio.imagenEspacio}/>
                <Styles.WrapperInline>
                    <Styles.WrapperDiv style={{'width':'70%'}}>
                        <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                            <Styles.Text style={{'fontWeight':'400'}}>
                                Tipo: 
                            </Styles.Text>
                            <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                {espacio.vehiculo}
                            </Styles.Text>
                        </Styles.WrapperInline>
                    </Styles.WrapperDiv>
                    <Styles.WrapperDiv style={{'width':'30%'}}>
                        <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                            <Styles.Text style={{'fontWeight':'400'}}>
                                Disponible: 
                            </Styles.Text>
                            <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                {espacio.disponible}
                            </Styles.Text>
                        </Styles.WrapperInline>
                    </Styles.WrapperDiv>
                </Styles.WrapperInline>

                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'400'}}>
                        Propietario: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {espacio.nombre.charAt(0)}{espacio.nombre.slice(1).toLowerCase()} {espacio.apPaterno.charAt(0)}{espacio.apPaterno.slice(1).toLowerCase()}
                    </Styles.Text>
                </Styles.WrapperInline>

                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'400'}}>
                        Precio: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'lowercase'}}>
                        ${espacio.precio} por {espacio.tipoCobro}
                    </Styles.Text>
                </Styles.WrapperInline>

                <Styles.Banner onClick={() => handleDescription()}>
                    <Styles.TextBanner style={{'fontWeight':'400', 'marginLeft':'5%'}}>
                        Descripción 
                    </Styles.TextBanner>
                    {
                        descripcionDisabled ?
                            <img src={arrow_down} style={{'marginRight':'10%'}}/>
                        : 
                            <img src={arrow_up} style={{'marginRight':'10%'}}/>
                           
                    }
                    
                </Styles.Banner>
                {
                    !descripcionDisabled && 
                    <>
                        <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                            <Styles.Text style={{'fontWeight':'400'}}>
                                Tipo suelo: 
                            </Styles.Text>
                            <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'Capitalize'}}>
                                {espacio.tipoSuelo}
                            </Styles.Text>
                        </Styles.WrapperInline>   
                        
                        <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                            <Styles.Text style={{'fontWeight':'400'}}>
                                Techo: 
                            </Styles.Text>
                            <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'Capitalize'}}>
                                {(espacio.techo ? 'Si' : 'No')}
                            </Styles.Text>
                        </Styles.WrapperInline>  

                        {
                            espacio.descripcion !== null &&

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Descripción: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                { espacio.descripcion }
                                </Styles.Text>
                            </Styles.WrapperInline>   
                        }

                        {
                            listaServiciosEspacio.length > 0 &&
                                <>
                                    <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                        <Styles.Text style={{'fontWeight':'400'}}>
                                            Otros: 
                                        </Styles.Text>
                                    </Styles.WrapperInline> 
                                    <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px', 'marginTop':'0px'}}>
                                        <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'Capitalize'}}>
                                            {
                                                listaServiciosEspacio.map((data,key) => {
                                                    return (
                                                        <li key={key}>
                                                            {data}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </Styles.Text>
                                    </Styles.WrapperInline> 
                                </>
                        }  
                        
                    </>
                }

                <Styles.WrapperInline style={{'justifyContent': 'center'}}>
                    <Styles.Button onClick={() => openModal()}>
                        SOLICITAR RESERVA
                    </Styles.Button>
                </Styles.WrapperInline>
               
            </Styles.Wrapper>
            
            <FondoOpaco
                isVisible={mainState.isModalOpen}
            />
        </>
    )
}


export default DetalleEspacio;