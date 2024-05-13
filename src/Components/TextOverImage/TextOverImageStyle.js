import styled from 'styled-components';

export const TextOverImageSection = styled.section`
background: url(${props => props.image});
background-position: center;
background-size: cover;
padding: 8%;
width: 100%;
display: flex;
margin-bottom: 3.4%;
`;