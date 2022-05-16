import styled from "styled-components";
import { rem } from "polished";
import icon_back from "./../../icon/back.svg";
import icon_save_car from "./../../icon/logo.svg";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const maxWidth = rem("1200px");

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
`;


const LogoMenu = styled.img`
  width: 20px;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;

const LogoSaveCar = styled.img`
  background: #FFF9D5;
  border-radius: 100%;
  padding: 5px;
  width: 20px;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: #FFF9D5;
  font-weight: 700;
  font-family: rubik;
  margin-left: 5px;
  @media (min-width: ${minWidth1}) {
    font-size: 25px;
    margin-left: 6px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 30px;
    margin-left: 11px;
  }
`;

const WrapperTitle = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const HeaderSmall = ({onBack}) => {

  return (
    <>
      <Wrapper>
        {
          onBack &&
            <span onClick={() => onBack()} style={{'cursor':'pointer'}}>
              <LogoMenu src={icon_back}></LogoMenu>
            </span>
        }
      
        <WrapperTitle>
          <LogoSaveCar src={icon_save_car}/>
          <Title>SaveCar</Title>
        </WrapperTitle>
      </Wrapper>
    </>
  );
};

export default HeaderSmall;
