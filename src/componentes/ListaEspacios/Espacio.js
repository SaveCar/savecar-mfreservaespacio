import * as Styles from "./Styles.js";
import img_prueba from"./../../icon/espacio.jpg";
const cargarImagen = require.context("../../../../../DJANGO/ms-savecar/", true);



export const Espacio = ({direccion, precio, tipoCobro, comuna, tipo, disponible, imagen}) => {
    return(
        <>
            <Styles.Card>
                <Styles.WrapperContent>
                    <Styles.WrapperInline>
                        <Styles.WrapperDiv>
                            <Styles.WrapperImage 
                                src={cargarImagen(`${ imagen }`)} alt={imagen}
                            />
                        </Styles.WrapperDiv>
                        <Styles.WrapperDiv>
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