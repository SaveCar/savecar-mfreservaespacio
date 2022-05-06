import styled from "styled-components";
import { rem } from "polished";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
display: block;
`;

export const Card = styled.div`
    background: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 16px;
    @media (min-width: ${minWidth}) {
        width: 65%;
        margin-top: 24px;
    }
    @media (min-width: ${maxWidth}) {
        width: 55%;
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
  @media (min-width: ${minWidth}) {
    margin-bottom: 5%;
  }
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