import * as Styles from "./Styles.js";
import img_prueba from"./../../icon/espacio.jpg";

export const Espacio = ({direccion, servicios, tipo, disponible}) => {
    return(
        <>
            <Styles.Card>
                <Styles.WrapperContent>
                    <Styles.WrapperInline>
                        <Styles.WrapperDiv>
                            <Styles.WrapperImage 
                                src={img_prueba}
                            />
                        </Styles.WrapperDiv>
                        <Styles.WrapperDiv>
                            <Styles.Text style={{'fontWeight':'400', 'textTransform':'uppercase'}}>
                                {direccion}
                            </Styles.Text>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px', 'alignItems':'flex-start'}}>
                                <Styles.Text style={{'fontWeight':'300', 'textAlign':'justify'}}>
                                    <b style={{'fontWeight':'400'}}>Servicios:</b> {servicios}
                                </Styles.Text>
                            </Styles.WrapperInline>
                            
                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Tipo: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                    {tipo}
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Disponible: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {disponible}                              
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