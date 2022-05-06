import styled from "styled-components";
import { rem } from "polished";
import * as singleSpa from "single-spa";
import img_exito from "./../../icon/exito.png";
import img_error from "./../../icon/error.png";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

const Imagen = styled.img`
    display: block;
    height: 120px;
    width: 120px;
    margin-top: 65% !important;
    margin: auto;
`;

const Wrapper = styled.div`
    display: block;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #304562;
  font-weight: 600;
  font-family: rubik;
  @media (min-width: ${minWidth}) {
    font-size: 45px;
    margin-left: 10px;
    margin-top: 24px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 53px;
    margin-left: 14px;
    margin-top: 10px;
  }
`;

const SubTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  color: #304562;
  font-weight: 500;
  font-family: rubik;
  margin: 0px;
  padding-top: 15px;
  @media (min-width: ${minWidth}) {
    font-size: 30px;
    padding-top: 9px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 38px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #304562;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 20px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 25px;
  }
`;




const Mensaje = ({title, subtitle, text, tipo}) => {

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfregusuario").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = () => {
    unmountApplication("mfbienvenida");
  }

  setTimeout(() => {
    onContinue()
  },3000)

  return (
    <Wrapper>
      {
          tipo === 'exito' ? 
              <Imagen src={img_exito}/>
          : 
              <Imagen src={img_error}/>
      }
      <Title>
          {title}
      </Title>
      <SubTitle>
          {subtitle}
      </SubTitle>
      <Text>
          {text}
      </Text>
    </Wrapper>
  );
};

export default Mensaje;