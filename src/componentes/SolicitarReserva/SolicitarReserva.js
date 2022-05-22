import React from "react";
import styled, {keyframes} from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("900px");
const minWidth4 = rem("1000px");
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
    @media (min-width: ${minWidth1}) {
      width: 80%;
    }
    @media (min-width: ${minWidth2}) {
      width: 80%;
      margin-top: -30px;
    }
    @media (min-width: ${minWidth3}) {
      width: 70%;
      margin-top: -40px;
    }
    @media (min-width: ${minWidth4}) {
      width: 60%;
      margin-top: -70px;
    }
    @media (min-width: ${maxWidth}) {
      width: 55%;
      margin-top: -75px;
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
  margin: 16px 0px;
  margin-left: 90%;
  @media (min-width: ${minWidth1}) {
    margin: 24px 0px;
    margin-left: 90%;
  }
`;

const Imagen = styled.img`
  width: 80%;
  @media (min-width: ${minWidth1}) {
    width: 75%;
  }
  @media (min-width: ${minWidth2}) {
    width: 65%;
  }
  @media (min-width: ${minWidth3}) {
    width: 55%;
  }
  @media (min-width: ${maxWidth}) {
    width: 55%;
  }
`;

const Icono = styled.img`
  width: 20px;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
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
  font-size: 12px;
  text-align: center;
  color: #304562;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 0px;
  @media (min-width: ${minWidth2}) {
    font-size: 16px;
  }
`;


export const Label = styled.label`
  font-family: rubik;
  display: block;
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 14px;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 2%;
  height: auto;
  border-radius: 10px;
  color: #304562;
  font-family: rubik;
  font-size: 14px;
  font-weight: 300;
  text-align: right;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 18px;
  }
`;

export const Error = styled.small`
  color: #9E2C2C;
  font-weight: 300;
  font-family: Rubik;
  font-size: 12px;
  display: block;
  text-align: right;
  margin-right: 3%;
  @media (min-width: ${minWidth1}) {
    font-size: 13px;
  }
`;

const InputTextArea = styled.textarea`
  width: 95%;
  border-radius: 10px;
  height: 70px;
  padding: 2%;
  @media (min-width: ${minWidth1}) {
    height: 50px;
  }
  @media (min-width: ${maxWidth}) {
    height: 40px;
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
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  cursor: pointer;
  padding: 2% 10%;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    padding: 2% 10%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 1.6% 10%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 1.4% 10%;
  }
`;

const WrapperText = styled.div`
  border: 1px solid rgba(196, 215, 241, 1);
  background:rgba(196, 215, 241, 0.4);
  border-radius:10px;
  padding:3% 3px;
  width:60%;
`;

const Line = styled.div`
  background: rgba(203,187,161,0.6);
  height: 1px;
  width: 100%;
  margin: 3%;
`;





class SolicitarReserva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disponible: this.props.disponible,
          cantidad: '',
          comentario: null,
          displayCantidad: 'none',
          mensajeError: null,
          isValid: false,
          tiempoTotal: '',
          displayTiempoTotal:'none',
          mensajeErrorTiempoTotal: null,
          displayFecha: 'none',
          mensajeErrorFecha: null,
          estiloError:{
            color: 'rgba(158, 44, 44, 1)',
            border: '1px solid rgba(158, 44, 44, 1)'
          },
          cantidadValid: false,
          tiempoValid: false,
          fechaValid: false,
          totalPagar: 0
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

          let num = (e.target.value)
          this.setState({cantidad: num})

          if (num > this.state.disponible){
            this.setState({mensajeError: `La cantidad máxima que puede solicitar es ${this.props.disponible}`})
            this.setState({displayCantidad: 'block'})
            this.setState({cantidad:''})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else if (num === '0'){
            this.setState({mensajeError: `Debes ingresar un número válido`})
            this.setState({displayCantidad: 'block'})
            this.setState({cantidad:''})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else if (num.length < 1){
            this.setState({mensajeError: `Debes ingresar una cantidad a reservar`})
            this.setState({displayCantidad: 'block'})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else{
            this.setState({displayCantidad: 'none'})
            this.setState({cantidadValid: true})

            if (this.state.tiempoValid && this.state.fechaValid) {
              this.setState({isValid: true})
            }

            if (this.state.tiempoTotal){
              let precio = (this.state.tiempoTotal * this.props.precio) * this.state.cantidad
              this.setState({totalPagar: precio});
            }
          }
        }

        const handleChangeTiempo = (e) => {
          let tiempo = e.target.value
          this.setState({tiempoTotal: tiempo})

          if (tiempo === '0'){
            this.setState({mensajeErrorTiempoTotal: `Debes ingresar un número válido`})
            this.setState({displayTiempoTotal: 'block'})
            this.setState({tiempoTotal:''})
            this.setState({isValid: false});
            this.setState({tiempoValid: false})
          }
          else if (tiempo.length < 1){
            this.setState({mensajeErrorTiempoTotal: `Debes ingresar un número de ${this.props.tipoCobro}s`})
            this.setState({displayTiempoTotal: 'block'})
            this.setState({tiempoValid: false})
            this.setState({isValid: false});
          }
          else{
            this.setState({displayTiempoTotal: 'none'})
            this.setState({tiempoValid: true})

            if (this.state.cantidadValid && this.state.fechaValid) {
              this.setState({isValid: true})
            }

            if (this.state.cantidad){
              let precio = (this.state.tiempoTotal * this.props.precio) * this.state.cantidad
              this.setState({totalPagar: precio});
            }
          }
        }

        const handleChangeFecha = (e) => {
          let fecha = e.target.value
          this.setState({fechaInicio: fecha})

          let diaReserva = new Date(fecha).getDate() + 1
          let mesReserva = new Date(fecha).getMonth() + 1
          let anioReserva = new Date(fecha).getFullYear()
          
          let diaActual = new Date().getDate()
          let mesActual = new Date().getMonth() + 1
          let anioActual = new Date().getFullYear()

          if (fecha === undefined){
            this.setState({mensajeErrorFecha: `Debes seleccionar una fecha`})
            this.setState({displayFecha: 'block'})
            this.setState({fechaValid: false})
            this.setState({isValid: false});
          }else{
            //año no sea menos al atual
            if (anioReserva < anioActual){
              this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
              this.setState({displayFecha: 'block'})
              this.setState({fechaValid: false})
              this.setState({isValid: false});
            }else {
              //mes no sea menos al atual
              if (mesReserva < mesActual){
                this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
                this.setState({displayFecha: 'block'})
                this.setState({fechaValid: false})
                this.setState({isValid: false});
              }else if (mesReserva === mesActual){
                //dia no sea menos al actual
                if (diaReserva === diaActual){
                  this.setState({displayFecha: 'none'})
                  this.setState({fechaValid: true})

                  if (this.state.cantidadValid && this.state.tiempoValid) {
                    this.setState({isValid: true})
                  }

                }else if (diaReserva > diaActual){
                  this.setState({displayFecha: 'none'})
                  this.setState({fechaValid: true})

                  if (this.state.cantidadValid && this.state.tiempoValid) {
                    this.setState({isValid: true})
                  }
                }else {
                  this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
                  this.setState({displayFecha: 'block'})
                  this.setState({fechaValid: false})
                  this.setState({isValid: false});
                }
              }
              else{
                this.setState({displayFecha: 'none'})
                this.setState({fechaValid: true})

                if (this.state.cantidadValid && this.state.tiempoValid) {
                  this.setState({isValid: true})
                }
              }
            }
          }
        }

        const handleBlur = (e) => {
          if (this.state.cantidad > this.state.disponible){
            this.setState({mensajeError: `La cantidad máxima que puede solicitar es ${this.props.disponible}`})
            this.setState({displayCantidad: 'block'})
            this.setState({cantidad:''})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else if (this.state.cantidad === '0'){
            this.setState({mensajeError: `Debes ingresar un número válido`})
            this.setState({displayCantidad: 'block'})
            this.setState({cantidad:''})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else if (this.state.cantidad.length < 1){
            this.setState({mensajeError: `Debes ingresar una cantidad a reservar`})
            this.setState({displayCantidad: 'block'})
            this.setState({isValid: false});
            this.setState({cantidadValid: false})
          }
          else{
            this.setState({displayCantidad: 'none'})
            this.setState({cantidadValid: true})

            if (this.state.tiempoValid && this.state.fechaValid) {
              this.setState({isValid: true})
            }

            if (this.state.tiempoTotal){
              let precio = (this.state.tiempoTotal * this.props.precio) * this.state.cantidad
              this.setState({totalPagar: precio});
            }
          }
        }

        const handleBlurTiempo = (e) => {
          if (this.state.tiempoTotal === '0'){
            this.setState({mensajeErrorTiempoTotal: `Debes ingresar un número válido`})
            this.setState({displayTiempoTotal: 'block'})
            this.setState({tiempoTotal:''})
            this.setState({isValid: false});
            this.setState({tiempoValid: false})
          }
          else if (this.state.tiempoTotal.length < 1){
            this.setState({mensajeErrorTiempoTotal: `Debes ingresar un número de ${this.props.tipoCobro}s`})
            this.setState({displayTiempoTotal: 'block'})
            this.setState({tiempoValid: false})
            this.setState({isValid: false});
          }
          else{
            this.setState({displayTiempoTotal: 'none'})
            this.setState({tiempoValid: true})

            if (this.state.cantidadValid && this.state.fechaValid) {
              this.setState({isValid: true})
            }

            if (this.state.cantidad){
              let precio = (this.state.tiempoTotal * this.props.precio) * this.state.cantidad
              this.setState({totalPagar: precio});
            }
          }
        }

        const handleBlurFecha = (e) => {
          let diaReserva = new Date(this.state.fechaInicio).getDate() + 1
          let mesReserva = new Date(this.state.fechaInicio).getMonth() + 1
          let anioReserva = new Date(this.state.fechaInicio).getFullYear()
          
          let diaActual = new Date().getDate()
          let mesActual = new Date().getMonth() + 1
          let anioActual = new Date().getFullYear()
          
          if (this.state.fechaInicio === undefined){
            this.setState({mensajeErrorFecha: `Debes seleccionar una fecha`})
            this.setState({displayFecha: 'block'})
            this.setState({fechaValid: false})
            this.setState({isValid: false});
          }else{
            //año no sea menos al atual
            if (anioReserva < anioActual){
              this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
              this.setState({displayFecha: 'block'})
              this.setState({fechaValid: false})
              this.setState({isValid: false});
            }else {
              //mes no sea menos al atual
              if (mesReserva < mesActual){
                this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
                this.setState({displayFecha: 'block'})
                this.setState({fechaValid: false})
                this.setState({isValid: false});
              }else if (mesReserva === mesActual){
                //dia no sea menos al actual
                if (diaReserva === diaActual){
                  this.setState({displayFecha: 'none'})
                  this.setState({fechaValid: true})

                  if (this.state.cantidadValid && this.state.tiempoValid) {
                    this.setState({isValid: true})
                  }

                }else if (diaReserva > diaActual){
                  this.setState({displayFecha: 'none'})
                  this.setState({fechaValid: true})

                  if (this.state.cantidadValid && this.state.tiempoValid) {
                    this.setState({isValid: true})
                  }
                }else {
                  this.setState({mensajeErrorFecha: `Debes seleccionar una fecha igual o mayor a la actual`})
                  this.setState({displayFecha: 'block'})
                  this.setState({fechaValid: false})
                  this.setState({isValid: false});
                }
              }
              else{
                this.setState({displayFecha: 'none'})
                this.setState({fechaValid: true})

                if (this.state.cantidadValid && this.state.tiempoValid) {
                  this.setState({isValid: true})
                }
              }
            }
          }
        }

        const changeComentario = (e) =>{
          let comentario = e.target.value;
          this.setState({comentario: comentario});
        }

        const handleOnContinue = () => {
          const solicitud = {
            'cantidadEspacio' : this.state.cantidad,
            'fechaInicio' : this.state.fechaInicio,
            'cantidadTiempo' : this.state.tiempoTotal,
            'comentario' : this.state.comentario,
            'precioTotal' : this.state.totalPagar,
            'espacio': this.props.espacio,
            'usuario': JSON.parse(localStorage.getItem('userData')).data.idUsuario,
            'tipoCobro': this.props.tipoCobro
          }

          localStorage.setItem('datosSolicitudReserva', JSON.stringify(solicitud))
          this.props.onContinue()
        }

        return (
        
            <BackgroundWrapper>
              <BackgroundWrapperModal>
            
                  <WrapperInline>
                    <WrapperDiv style={{'width':'40%'}}>
                      <Imagen src={this.props.image}/>
                    </WrapperDiv>
                    <WrapperText>
                      <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textAlign':'justify', 'marginRight':'2%'}}>
                        Para confirmar solicitud de la reserva, es necesario que complete los siguientes datos
                      </Text>
                    </WrapperText>
                  </WrapperInline>

                  <WrapperInline>
                    <WrapperDiv style={{'width':'60%', 'justifyContent':'flex-start'}}>
                      <Label style={this.state.displayCantidad === 'block' ? {'color':this.state.estiloError.color} : {}}>
                        Cantidad de espacios a reservar
                      </Label>
                    </WrapperDiv>
                    <WrapperDiv style={{'width':'38%', 'justifyContent':'flex-start'}}>
                      <Input
                      style={this.state.displayCantidad === 'block' ? {'border':this.state.estiloError.border} : {}}
                        placeholder="10"
                        type={''}
                        value={this.state.cantidad}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                        onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                      />
                    </WrapperDiv>
                  </WrapperInline>
                  <Error
                    style={{'display':this.state.displayCantidad}}
                  >
                    {this.state.mensajeError}
                  </Error>

                  <WrapperInline>
                    <WrapperDiv style={{'width':'60%', 'justifyContent':'flex-start'}}>
                      <Label style={this.state.displayTiempoTotal === 'block' ? {'color':this.state.estiloError.color} : {}}>
                        Número de {this.props.tipoCobro}s
                      </Label>
                    </WrapperDiv>
                    <WrapperDiv style={{'width':'38%', 'justifyContent':'flex-start'}}>
                      <Input
                        style={this.state.displayTiempoTotal === 'block' ? {'border':this.state.estiloError.border} : {}}
                        placeholder="1"
                        type={''}
                        maxLength={'2'}
                        value={this.state.tiempoTotal}
                        onChange={(e) => handleChangeTiempo(e)}
                        onBlur={(e) => handleBlurTiempo(e)}
                        onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                      />
                    </WrapperDiv>
                  </WrapperInline>
                  <Error
                    style={{'display':this.state.displayTiempoTotal}}
                  >
                    {this.state.mensajeErrorTiempoTotal}
                  </Error>
                  
                  <WrapperInline>
                    <WrapperDiv style={{'width':'60%', 'justifyContent':'flex-start'}}>
                      <Label style={this.state.displayFecha === 'block' ? {'color':this.state.estiloError.color} : {}}>
                        Fecha inicio de la reserva
                      </Label>
                    </WrapperDiv>
                    <WrapperDiv style={{'width':'38%', 'justifyContent':'flex-start'}}>
                      <Input
                        style={this.state.displayFecha === 'block' ? {'border':this.state.estiloError.border} : {}}
                        type={'date'}
                        maxLength={'2'}
                        value={this.state.fechaInicio}
                        onChange={(e) => handleChangeFecha(e)}
                        onBlur={(e) => handleBlurFecha(e)}
                      />
                    </WrapperDiv>
                  </WrapperInline>
                  <Error
                    style={{'display':this.state.displayFecha}}
                  >
                    {this.state.mensajeErrorFecha}
                  </Error>

                  <WrapperInput>
                    <Label style={{'height':'20px', 'marginTop':'3%'}}>
                      Comentario (opcional)
                    </Label>
                    <InputTextArea
                      type="text"
                      maxLength={500}
                      onChange={(e) => changeComentario(e)}
                      value={this.state.comentario}
                    />
                  </WrapperInput>

                  <Line/>

                  <WrapperInline style={{'justifyContent': 'space-evenly', 'marginBottom':'4%'}}>
                    <Label>Valor total: </Label>
                    <Label> $ {this.state.totalPagar} </Label>
                  </WrapperInline>

                  {
                    this.state.isValid &&
                      <WrapperButton>
                        <Button
                          onClick={() => handleOnContinue()}
                        >
                          ENVIAR SOLICITUD
                        </Button>
                      </WrapperButton>
                  } 
                 
              </BackgroundWrapperModal>
          </BackgroundWrapper>
          
      )
    }
}
export default SolicitarReserva;