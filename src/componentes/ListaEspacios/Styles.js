import styled from "styled-components";
import { rem } from "polished";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    display: block;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 16px;
    width: 95%;
    @media (min-width: ${minWidth}) {
      width: 90%;
      margin-top: 24px;
    }
    @media (min-width: ${maxWidth}) {
      width: 85%;
    }
`;

export const WrapperContent = styled.div`
    display: block;
    padding: 4% 8%;
`;


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const WrapperDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    
  }
  @media (min-width: ${maxWidth}) {
    
  }
`;

export const WrapperImage = styled.img`
  width: 90%;
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 10px;
  display: block;
  margin: 2px 0px;
  color: #304562;
  @media (min-width: ${minWidth}) {
    font-size: 15px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 16px;
  }
`;

export const Message = styled.p`
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