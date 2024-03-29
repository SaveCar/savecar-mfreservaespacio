import * as Styles from "./Styles.js";

export const Espacio = ({direccion, precio, tipoCobro, comuna, tipo, capacidad, imagen, espacio, onContinue}) => {
    
    const handleContinue = (data) => {
        localStorage.setItem('espacioSeleccionado', JSON.stringify(data))
        onContinue()
    }

    return(
        <>
            <Styles.Card style={{'cursor':'pointer'}} onClick={() => handleContinue(espacio)}>
                <Styles.WrapperContent>
                    <Styles.WrapperInline>
                        <Styles.WrapperDiv style={{'alignItems':'center', 'width':'40%'}}>
                            <Styles.WrapperImage 
                                src={"http://127.0.0.1:8000" + imagen} alt={imagen}
                            />
                        </Styles.WrapperDiv>
                        <Styles.WrapperDiv style={{'width':'60%'}}>
                            <Styles.Text style={{'fontWeight':'400', 'textTransform':'uppercase'}}>
                                {direccion}
                            </Styles.Text>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Comuna: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                    {comuna[0].nombreComuna}
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Precio: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    ${precio} por {tipoCobro}
                                </Styles.Text>
                            </Styles.WrapperInline>
                            
                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Tipo: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {tipo}
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Capacidad: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {capacidad}                              
                                </Styles.Text>
                            </Styles.WrapperInline>

                        </Styles.WrapperDiv>
                    </Styles.WrapperInline>
                </Styles.WrapperContent>
            </Styles.Card>
        </>
    )
}


export default Espacio;