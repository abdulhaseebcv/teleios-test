import styled from 'styled-components';
import tickImage from '../../assets/images/tick.png'


export const FormSection = styled.section`
display: flex;
justify-content: center;
margin-bottom: 30px;
h3{
  text-align: center;
}

form {
  span{
    color:#d90429;
    margin-top: 5px;
  }
}

@media (max-width:1000px) {
  padding:0 5%;
}

`;

export const Wrapper = styled.div`
  p {
    margin: 20px 0;
  }

  .centered {
    text-align: center; 
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;



export const TextField = styled.div`
display: flex;
gap: 20px;
@media (max-width:1000px) {
  flex-direction: column;
}
`;

export const InputSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
@media (max-width:1000px) {
  width: 100%;
}
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border-radius: 6px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  font-size: 15px;
    line-height: 24px;
    &:focus{
      box-shadow: 0 0 0 3px rgba(152, 0, 238, 0.5); 
      outline: 2px solid transparent;
    outline-offset: 2px;
    }
`;

export const CheckboxSection = styled.div`
 display: flex;
 gap: 10px;
 align-items: center;
 @media (max-width:550px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`;

export const CheckboxLabel = styled.label`
  display: flex;
 gap: 10px;
 align-items: center;
 font-size: 14px;
`;

export const Checkbox = styled.input`
appearance: none;
background-color: #fff;
width: 20px;
height: 20px;
border-radius: 4px;
  border-color: rgb(152, 0, 238);

  &:checked {
    background-color: rgb(152, 0, 238);
    background-image: url(${tickImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

`;

export const SubmitButton = styled.button`
  width: 100%;
  background: rgb(152, 0, 238);
  margin-top: 30px;
  border-radius: 6px;
  border: 3px solid hsla(0, 0%, 100%, .3);
    box-shadow: 0 0 5px #fff;
    padding: 8px 0;
    color: inherit;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
    background: rgb(98, 0, 153);
        }
`;
