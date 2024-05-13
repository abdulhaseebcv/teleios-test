import React from 'react'
import { BannerContainer, ButtonWrapper, ContentWrapper, StyledLink } from './BannerStyle'
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
    return (
        <BannerContainer>
            <ContentWrapper>
                <h1>Teleios Dome Virtual Grand Prix</h1>
                <p>The Virtual GP will mirror the ‘real-life’ Grand Prix and take you across all 24 race events on the 2024 Formula 1 event calendar : Every Thursday Before the F1 Grand Prix at Teleios Dome.</p>
                <ButtonWrapper>
                    <StyledLink href='/https://teleiosdome.com/events/teleios-dome-virtual-grand-prix' type="book"><span><SlCalender size={20} /></span>Learn More</StyledLink>
                    <StyledLink href='https://www.google.com/maps/place/Teleios+Dome/@25.028862,55.186377,17z/data=!4m6!3m5!1s0x3e5f6de7e687c19b:0x7ee24a1d13502b20!8m2!3d25.0288617!4d55.1863767!16s%2Fg%2F11tx4g1whq?hl=en' type="direction"><span><MdLocationOn size={20} /></span>Get Directions</StyledLink>
                    <StyledLink href='https://api.whatsapp.com/send?phone=971566628585' type="chat"><span><FaWhatsapp size={20} /></span>Chat On Whatsapp</StyledLink>
                </ButtonWrapper>
            </ContentWrapper>
        </BannerContainer>
    )
}

export default Banner