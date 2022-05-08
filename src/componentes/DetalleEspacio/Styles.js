import styled from "styled-components";
import { rem } from "polished";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-top: 3%;
  @media (min-width: ${minWidth}) {
    width: 75%;
  }
  @media (min-width: ${maxWidth}) {
    width: 70%;
  }
`;


export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const WrapperImage = styled.img`
  margin-top: 6%;
  width: 60%;
  @media (min-width: ${minWidth}) {
    width: 45%;
    margin-top: 4%;
  }
  @media (min-width: ${maxWidth}) {
    width: 40%;
  }
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 14px;
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


export const Title = styled.h1`
  font-size: 20px;
  color: #304562;
  font-weight: 700;
  font-family: rubik;
  text-align: center;
  @media (min-width: ${minWidth}) {
    font-size: 30px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 38px;
  }
`;


export const WrapperTitle = styled.div`
  background: #F8F5F0;
  padding: 2%;
  height: 8%;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${minWidth}) {
    padding: 2%;
  }
`;


export const Banner = styled.div`
  background: #F8F5F0;
  height: 6%;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  margin-top: 3%;
  @media (min-width: ${minWidth}) {
    
  }
`;

export const TextBanner = styled.p`
  font-family: rubik;
  font-size: 14px;
  display: block;
  color: #304562;
  font-weigth: 400;
  margin-left: 8% !important;
  @media (min-width: ${minWidth}) {
    font-size: 19px;
    margin-left: 10% !important;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
    margin-left: 13% !important;
  }
`;


export const Button = styled.button`
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
margin-top: 5%;
@media (min-width: ${minWidth}) {
  font-size: 25px;
  height: 60px;
}
@media (min-width: ${maxWidth}) {
  font-size: 30px;
  height: 68px;
}
`;

export const WrapperDescription = styled.div`
  display:flex;
  width: 80%;
  margin-top: 3%;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    width: 75%;
  }
  @media (min-width: ${maxWidth}) {
    width: 70%;
  }
`;