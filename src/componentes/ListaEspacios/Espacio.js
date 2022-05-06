import * as Styles from "./Styles.js";
import img_prueba from"./../../icon/espacio.jpg";

export const Espacio = () => {
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
                            <p>
                                nvjjevbrbnvjjev
                            </p>
                            <p>
                                nvjjevbrbnvjjev
                            </p>
                            <p>
                                nvjjevbrbnvjjev
                            </p>
                        </Styles.WrapperDiv>
                    </Styles.WrapperInline>
                </Styles.WrapperContent>
            </Styles.Card>
        </>
    )
}


export default Espacio;