import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import { PageWrapper } from './HomePageStyle'
import ImageText from '../Components/ImageText/ImageText'
import firstTimer from '../assets/images/first-timer.jpg';
import groupRacing from '../assets/images/group-racing.jpg';
import raceSession from '../assets/images/race-session.jpg';
import TextOverImage from '../Components/TextOverImage/TextOverImage'
import venueImage from '../assets/images/venue.jpg';
import galleryImage from '../assets/images/gallery.jpg';
import Form from '../Components/Form/Form'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Banner />
        <ImageText
          image={raceSession}
          title="Race Session"
          content="Experience non-stop speed and excitement with our Teleios racing simulator's race session booking. Enjoy 60 minutes of thrilling racing individually, navigating famous tracks with stunning graphics and realistic controls. Whether a seasoned racer or a first-time player, Teleios promises an unforgettable experience. Book your seat now and feel the rush of the race!"
          link='https://teleiosdome.com/booking/packages/race-session'
          layout="imageLeft"
        />
        <TextOverImage
          image={venueImage}
          title="T–Hydra One (E-Sport)"
          content="The Hydra-One Pro has been meticulously crafted for professional drivers, with attention to detail in every aspect of its construction. It has added features to enhance the user experience and create a truly realistic and immersive driving simulation. This makes it the ideal tool for training purposes, allowing the pros to improve their skills in a controlled and safe environment.."
          link='https://teleiosdome.com/simulators/t-%E2%80%93-hydra-one-(e-sport)'
        />
        <ImageText
          image={firstTimer}
          title="First Timer"
          content="Our First Timer experience is perfect for those who are new to racing simulators and want to learn the basics. The experience will include a tutorial guide to get you started and help you along the way. With our state-of-the-art equipment and immersive technology, you'll feel like you're driving a real race car. Don't worry if you make mistakes, our team is here to provide help and support throughout your 30-minute session. Come and join us for an unforgettable experience at Teleios Dome."
          link='https://teleiosdome.com/booking/packages/first-timer'
          layout="imageLeft"
        />
        <ImageText
          image={groupRacing}
          title="Group Racing"
          content="Gather your squad and prepare to unleash your inner racing champion! With our Group Booking, you and your friends can experience the ultimate racing adventure together. Book now for 5 racers or more and get ready for a heart-pumping 60-minute experience. Set up your driving position and simulator in just 5 minutes, so you can hit the track as soon as possible. With a 15-minute practice session, you'll have plenty of time to get familiar with the car and track. Then, prove yourself in a nail-biting 10-minute qualifying round to determine your starting position. Finally, rev up your engines and compete in a thrilling 30-minute race session to see who comes out on top!"
          link='https://teleiosdome.com/booking/packages/group-racing'
          layout="imageRight"
        />
        <TextOverImage
          image={galleryImage}
          title="Teleios Dome Virtual Grand Prix"
          content="The Virtual GP will mirror the ‘real-life’ Grand Prix and take you across all 24 race events on the 2024 Formula 1 event calendar : Every Thursday Before the F1 Grand Prix at Teleios Dome."
          link='https://teleiosdome.com/events/teleios-dome-virtual-grand-prix'
        />
        <Form />
        <Footer />
      </PageWrapper>
    </>
  )
}

export default HomePage