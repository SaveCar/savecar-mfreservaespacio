import React from "react";
import styled, {keyframes} from "styled-components";
import { rem } from "polished";
import icono_close from "./../../icon/close.svg";
import moment from "moment";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

const keyFrameExampleOne = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;
const BackgroundWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgb(114 121 129 / 20%);
    border-radius: 10px;
    animation: ${keyFrameExampleOne} 0.3s ease-in-out 0s;
    margin: auto;
    @media (min-width: ${minWidth}) {
      margin-top: -90px;
      width: 65%;
    }
    @media (min-width: ${maxWidth}) {
      width: 55%;
    }
`;

const BackgroundWrapperModal = styled.div`
    width: 90%;
    margin: auto;
    margin-bottom: 5%;

`;

const CloseModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  margin: 16px;
  margin-left: 90%;
  @media (min-width: ${minWidth}) {
    margin: 24px;
    margin-left: 90%;
  }
`;

const Imagen = styled.img`
  width: 80%
`;

const Icono = styled.img`
    width: 25px;
    @media (min-width: ${minWidth}) {
    width: 35px;
    }
    @media (min-width: ${maxWidth}) {
    width: 40px;
    }
`;


const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 3%;
`;


const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Text = styled.p`
  font-family: rubik;
  font-size: 12px;
  display: block;
  margin: 2px 0px;
  color: #304562;
  @media (min-width: ${minWidth}) {
    font-size: 19px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
  }
`;


const Label = styled.label`
  font-family: rubik;
  font-size: 14px;
  display: block;
  font-weight: 400;
  margin-bottom: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 18px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  display: block;
  width: 90%;
  padding-right: 3%;
  height: 25px;
  border-radius: 10px;
  color: #304562;
  font-family: rubik;
  font-size: 14px;
  font-weight: 300;
  text-align: right;
  @media (min-width: ${minWidth}) {
    height: 35px;
    font-size: 18px;
    padding-left: 2%;
  }
  @media (min-width: ${maxWidth}) {
    height: 40px;
    font-size: 20px;
  }
`;

const Error = styled.small`
  color: #9E2C2C;
  font-weight: 300;
  font-family: Rubik;
  font-size: 12px;
  display: block;
  margin-right: 5%;
  text-align: right;
  @media (min-width: ${minWidth}) {
    font-size: 16px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 18px;
  }
`;

const InputTextArea = styled.textarea`
  margin-top: 2%;
  width: 95%;
  border-radius: 10px;
  margin-bottom: 5%;
  height: 70px;
  padding: 2%;
  @media (min-width: ${minWidth}) {
    height: 100px;
  }
  @media (min-width: ${maxWidth}) {
    height: 130px;
  }
`;

const WrapperInput = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: 50px;
  font-size: 18px;
  width: 80%;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1; 
  cursor: pointer;
  @media (min-width: ${minWidth}) {
    font-size: 25px;
    height: 60px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 30px;
    height: 68px;
  }
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disponible: this.props.disponible,
          cantidad: '',
          comentario: null,
          displayCantidad: 'none',
          mensajeError: null,
          isValid: false
        };
    }
    componentDidMount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        if (this.props.isOpen === false){
            return null;
        }else{
            document.body.style.overflow = 'hidden';
        }

        if(this.props.onClose === true){
          console.log("hay que cerrar el modal!!");
        }else if (this.props.onClose === false){
          console.log("no hay que cerrar el modal");
        }
        
        const close = this.props.onClose;

        const handleChange = (e) => {
          try{
            var num = parseInt(e.target.value)
            if (num !== NaN && num > 0){
              this.setState({cantidad: num})
            }
            else{
              this.setState({cantidad: null})
            }
                        
            //validar que valor no sea mayor a disponible para activar boton
            if (this.state.cantidad > this.state.disponible){
              this.setState({mensajeError: `La cantidad máxima que puede solicitar es ${this.props.disponible}`})
              this.setState({displayCantidad: 'block'})
              this.setState({isValid: false});
            }else{
              this.setState({displayCantidad: 'none'})
            }
          }
          catch{
            console.log(e.target.value)
          }
        }

        const handleBlur = (e) => {
          if (this.state.cantidad > this.state.disponible){
            this.setState({mensajeError: `La cantidad máxima que puede solicitar es ${this.props.disponible}`})
            this.setState({displayCantidad: 'block'})
            this.setState({isValid: false});
          }
          else if (this.state.cantidad === null){
            this.setState({mensajeError: `Debes ingresar un número válido`})
            this.setState({displayCantidad: 'block'})
            this.setState({isValid: false});
          }
          else{
            this.setState({displayCantidad: 'none'})
            this.setState({isValid: true});
          }
        }

        const changeComentario = (e) =>{
          let comentario = e.target.value;
          this.setState({comentario: comentario});
        }

        return (
        
          <BackgroundWrapper>
              <BackgroundWrapperModal>
                  <CloseModal>
                      <span onClick={()=>close()} style={{'cursor':'pointer'}}> 
                        <Icono src={icono_close}/>
                      </span>
                  </CloseModal>
                  <WrapperInline>
                    <WrapperDiv style={{'width':'40%'}}>
                      <Imagen src={this.props.image}/>
                    </WrapperDiv>
                    <WrapperDiv style={{'background':'#C4D7F1', 'borderRadius':'10px', 'padding':'3% 3px', 'width':'60%'}}>
                      <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textAlign':'justify', 'marginRight':'2%'}}>
                        Para confirmar solicitud de la reserva, es necesario que complete los siguientes datos
                      </Text>
                    </WrapperDiv>
                  </WrapperInline>

                  <WrapperInline>
                    <WrapperDiv style={{'width':'50%', 'justifyContent':'flex-start'}}>
                      <Label>
                        Cantidad a reservar:
                      </Label>
                    </WrapperDiv>
                    <WrapperDiv style={{'width':'50%', 'justifyContent':'flex-start'}}>
                      <Input
                        placeholder="10"
                        type={''}
                        value={this.state.cantidad}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                      />
                    </WrapperDiv>
                  </WrapperInline>
                  <Error
                    style={{'display':this.state.displayCantidad}}
                  >
                    {this.state.mensajeError}
                  </Error>
                  

                  <WrapperInput>
                    <Label>
                      Comentario
                    </Label>
                    <InputTextArea
                      type="text"
                      maxLength={500}
                      onChange={(e) => changeComentario(e)}
                      value={this.state.comentario}
                    />
                  </WrapperInput>

                  {
                    this.state.isValid &&
                      <WrapperButton>
                        <Button>
                          ENVIAR SOLICITUD
                        </Button>
                      </WrapperButton>
                  } 
                 
              </BackgroundWrapperModal>
          </BackgroundWrapper>
            
          
        )
    }
}
export default Modal;