import React from 'react'
import { TextOverImageSection } from './TextOverImageStyle'
import { TextBlock } from '../ImageText/ImageTextStyle'

const TextOverImage = ({ image, title, content, link }) => {
    return (
        <TextOverImageSection image={image}>
            <TextBlock layout='textOverImage'>
                <h3>{title}</h3>
                <hr />
                <p>{content}</p>
                <a href={link}>Learn More</a>
            </TextBlock>
        </TextOverImageSection>
    )
}

export default TextOverImage