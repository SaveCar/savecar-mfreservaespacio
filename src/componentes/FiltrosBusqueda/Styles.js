import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4% 8%;
  @media (min-width: ${minWidth1}) {
    padding: 2% 7%;
  }
  @media (min-width: ${minWidth2}) {
    padding: 3% 6%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 2% 5%;
  }
`;

export const WrapperInput = styled.div`
  
`;

export const Label = styled.label`
  font-family: rubik;
  display: block;
  font-weight: 400;
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
  text-align: left;
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
  margin-top: 7%;
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

export const Error = styled.small`
  color: #9E2C2C;
  font-weight: 300;
  font-family: Rubik;
  font-size: 12px;
  display: block;
  margin-left: 1%;
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
    color: #9E2C2C;
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

export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 7%;
  @media (min-width: ${minWidth1}) {
    margin-bottom: 5%;
  }
`;


export const Select = styled.select`
  background: #F8F5F0;
  border: 1px solid #CBBBA1;
  cursor: pointer;
  color: #808D9E;
  padding: 2%;
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



export const RadioButton = styled.input`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  width: 20px;
  height: 15px;
  font-size: 18px;
  border: 1px solid #CBBBA1;
  margin-top: 3%;
  @media (min-width: ${minWidth1}) {
    font-size: 25px;
    width: 25px;
    height: 20px;
    margin-right: 3%;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 30px;
  }
`;

export const WrapperRadioButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  margin-top: 5%;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    width: 80%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth3}) {
    width: 60%;
    margin-bottom: 24px;
  }
  @media (min-width: ${maxWidth}) {
    width: 50%;
  }
`;
