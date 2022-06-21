import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5%;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.img`
  width: 200px;
  @media (min-width: ${minWidth1}) {
    width: 250px;
  }
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 10px;
  display: block;
  margin: 2px 0px;
  color: #000000;
  @media (min-width: ${minWidth1}) {
    font-size: 15px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
color: rgba(0, 0, 0, 1);
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  font-family: rubik;
  margin-top: 15px;
  @media (min-width: ${minWidth1}) {
    font-size: 21px;
    margin-top: 20px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 26px;
  }`;



export const WrapperTitle = styled.div`

  padding: 1%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
`;


export const Banner = styled.div`
  background: #FFFFFF;
  height: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  @media (min-width: ${minWidth1}) {
    
  }
`;

export const TextBanner = styled.p`
  font-family: rubik;
  font-size: 14px;
  display: block;
  color: #000000;
  font-weigth: 400;
  margin-left: 8% !important;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
    margin-left: 10% !important;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 18px;
  }
`;




export const WrapperDescription = styled.div`
  display:flex;
  width: 80%;
  margin-top: 3%;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    width: 75%;
  }
  @media (min-width: ${maxWidth}) {
    width: 70%;
  }
`;



export const LogoArrow = styled.img`
  width: 20px;
  cursor: pointer;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


export const WrapperInput = styled.div`
  margin-bottom: 7%;
  @media (min-width: ${minWidth1}) {
    margin-bottom: 5%;
  }
`;

export const Label = styled.label`
  font-family: rubik;
  display: block;
  font-weight: 400;
  margin-bottom: 3px;
  font-size: 14px;
  width: 80%;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 45%;
  padding: 2% 1%;
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


export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid rgba(0, 0, 0, 1);
  cursor: pointer;
  padding: 3% 10%;
  margin-top:8%;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    margin-top:5%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 2.5% 10%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 2% 10%;
  }
`;
export const Error = styled.small`
  color: rgba(215, 32, 32, 1) !important;
  font-weight: 300;
  font-family: Rubik;
  font-size: 12px;
  display: block;
  margin-right: 1%;
  text-align: right;
  @media (min-width: ${minWidth1}) {
    font-size: 13px;
  }
`;


export const ErrorMessage = styled.div`
  background: rgba(232, 203, 203, 0.33);
  border: 1px solid #E8CBCB;
  border-radius: 5px;
  margin-bottom: 4%;
  padding: 3% 1%;
  text-align: center;
  color: rgba(215, 32, 32, 1) !important;
  font-family: Rubik;
  font-weight: 300;
  font-size: 12px;
  line-height: 23px; 
  transition: all 0.3s ease;
  @media (min-width: ${minWidth1}) {
    font-size: 17px;
    padding: 4% 3%;
    line-height: 28px; 
  }
  @media (min-width: ${maxWidth}) {
    font-size: 19px;
    line-height: 30px; 
  }
`;

export const DisabledErrorMessage= styled.div`
    margin-bottom: 4%;
    padding: 4% 2%;
    font-size: 12px;
    line-height: 23px; 
    transition: all 0.3s ease;
    @media (min-width: ${minWidth1}) {
      font-size: 17px;
      padding: 4% 3%;
      line-height: 28px; 
    }
    @media (min-width: ${maxWidth}) {
      font-size: 19px;
      line-height: 30px; 
    }
`;

export const LineSmall = styled.hr`
  border: 1px solid #000000;
  background: #000000;
  width: 100%;
`;



export const Select = styled.select`
  background: white;
  border: 1px solid #CBBBA1;
  cursor: pointer;
  color: #808D9E;
  padding: 3%;
  height: auto;
  font-family: rubik;
  text-align: left;
  text-transform: Capitalize;
  font-size: 14px;
  font-weight: 300;
  border-radius: 10px;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 18px;
  }
`;


