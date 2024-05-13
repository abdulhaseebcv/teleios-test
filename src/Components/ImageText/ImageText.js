import React from 'react'
import { ImageBlock, ImageTextSection, StyledContainer, TextBlock } from './ImageTextStyle'
import LazyLoad from 'react-lazyload';


const ImageText = ({ image, title, content, link, layout }) => {
    return (
        <LazyLoad height={200} offset={100}>
            <ImageTextSection>
                <StyledContainer layout={layout}>
                    <ImageBlock layout={layout}>
                        <img src={image} alt={title} />
                    </ImageBlock>
                    <TextBlock>
                        <h3>{title}</h3>
                        <hr />
                        <p>{content}</p>
                        <a href={link}>Book Now</a>
                    </TextBlock>
                </StyledContainer>
            </ImageTextSection>
        </LazyLoad>
    )
}

export default ImageText