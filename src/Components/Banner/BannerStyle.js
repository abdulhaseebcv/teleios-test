import styled from 'styled-components';
import bannerImage from '../../assets/images/banner.png';


export const BannerContainer = styled.section`
background-image: url(${bannerImage});
width: 100%;
padding: 16% 0;
background-size: cover;
margin-bottom: 3.4%;
position: relative;

&:after{
   display: block;
   position: absolute;
   content: "";
   height: 150px;
   width: 100%;
   bottom: 0;
   background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
}

@media (max-width:850px) {
   padding: 95px 0;
   }
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 0 0 11%;

h1{
   font-weight: 700;
   margin-bottom: 2.7%;
}

p{
   width: 700px;
   margin-bottom: 2.7%;
}
   @media (max-width:850px) {
      p{
         width: 60%;
      }
   }
`;

export const ButtonWrapper = styled.div`
   display: flex;
   gap: 15px;
   @media (max-width:850px) {
      gap: 8px;
      flex-direction: column;
   }
`;

export const StyledLink = styled.a`
background: ${props => props.type === 'book' ? 'rgb(152, 0, 238);' : props => props.type === 'direction' ? '#003566' : '#007f5f'};
padding: 12px 16px;
border-radius: 5px;
border: none;
display: flex;
gap: 5px;
align-items: center;
color: #ffffff;
word-spacing: 2px;
font-weight: 900;
text-transform: uppercase;
font-size: clamp(10px,1.07vw,16px);
text-decoration: none;
cursor: pointer;
transition: .2s ease-in-out;

&:hover{
    background: #ffffff;
    color: #000000;
}

span{
    display: flex;
}
@media (max-width:850px) {
      padding: 8px;
   }

`;

