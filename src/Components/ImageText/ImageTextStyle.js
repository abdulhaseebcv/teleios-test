import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ImageTextSection = styled.section`
padding: 2%;
margin-bottom: 3.4%;
@media (max-width:850px){
    flex-direction: column;
    padding-left: 7%;
    padding-right: 7%;
}
`;

export const StyledContainer = styled.div`
display: flex; 
flex-direction: ${props => props.layout === 'imageLeft' ? 'row' : 'row-reverse'};
@media (max-width:850px){
    flex-direction: column;
    padding: 0;
}
`;


export const ImageBlock = styled.div`
padding: 1%;
flex: 1;
position: relative;

img{
    clip-path: ${props => props.layout === 'imageLeft' ? 'polygon(0 5%, 100% 0, 100% 100%, 0 90%)' : 'polygon(0 0, 97% 10%, 97% 90%, 0 100%)'};
    animation: ${fadeInUp} 0.5s ease-out;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`;


export const TextBlock = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex: ${props => props.layout === 'textOverImage' ? '' : 1};
clip-path: ${props => props.layout === 'textOverImage' ? 'polygon(0 0, 100% 5%, 100% 100%, -100% 100%)' : ''};
padding: ${props => props.layout === 'textOverImage' ? '4.7% 3.5%' : '0 0 0 3.9%'};
animation: ${fadeInUp} 0.5s ease-out;
background: ${props => props.layout === 'textOverImage' ? 'rgba(26, 12, 40, 0.8)' : ''};



h3{
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 3.5%;
}
hr{
    width: 5%;
    margin-bottom: 3.5%;
    border: 2px solid ;
}
p{
    width: 85%;
    margin-bottom: 3.5%;
}
    

    a{
        border: 3px solid hsla(0, 0%, 100%, .3);
    box-shadow: 0 0 5px #fff;
    background: rgb(152, 0, 238);
    padding: 1.3% 2.4%;
    border-radius: 5px;
        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;

        &:hover{
    background: rgb(98, 0, 153);
        }
    }

@media (max-width:850px){
    width: 100%;
    padding: ${props => props.layout !== 'textOverImage' && '0'};
    p{
        width: 100%;
    }
}
`;



