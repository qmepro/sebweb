import React from 'react'
import {
  Box,
  Container,
  Card,
  Text,
  mediaQueries,
  cx,
  Heading
} from '@hackclub/design-system'
import { wk } from 'theme'

const Base = Box.extend`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -64px;
    z-index: -1;
    background-color: ${props => cx(props.offset || 'gray.1')};
    ${wk('clip-path: polygon(0% 0%, 100% 0, 100% 75%, 0 100%)')};
  }

  img {
    border-radius: ${props => props.theme.radius}px;
    max-width: calc(100vw - 2rem);
    width: 32rem;
    ${mediaQueries[1]} {
      transform: translate(0, 2rem);
    }
  }

  mark {
    background-color: rgba(250, 247, 133, 0.8);
    color: ${props => props.theme.colors.black} !important;
    padding-left: 0.125em;
    padding-right: 0.125em;
    line-height: 1.35;
    width: 100%;
  }
`

Card.img = Card.withComponent('img')

export default props => (
  <Base mt={64 * -3} pt={256} pb={4} id="about" {...props}>
    <Box mx="auto" align="center">
      <Container maxWidth={48} align="left" px={3} mb={[4, 0]} id="section">
        
        <Heading.h2 f={[5, 6]} mt={0} mb={3}>
          <mark>About Us</mark>
        </Heading.h2>
        <Text f={[2, 4]}>
        SEB Tutorials was instituted in the year 2008. With Excellent Coaching &amp; with the help of Our Dedicated
        Teachers we are entering into the 10 th year of our Journey having the record of 0% Failure.<br /><br />
        Our Main Aim is to help the weaker students Improve &amp; Score Good Marks &amp; help them maintaining the
        marks. We not only teach students but also give our students A Conceptual Clarity which helps them
        Understanding the Chapters.
        </Text><br />
  
        <Heading.h2 f={[5, 6]} mt={0} mb={3}>
          <mark>Code of Conduct</mark>
        </Heading.h2>
        <Text f={[2, 4]}>
          <ul>
            <li>Students must attend all lectures, regular tests and complete home exercises regularly, as
              failure to do so can result in cancellation of admission without prior intimation.</li>
            <li>Vehicles are to be parked at the owner’s risk in the allotted Parking Area at the Classes.
              Students are supposed to insure their Vehicles with Comprehensive Insurance.</li>
            <li>Use of Water and Electricity should be made to the required extent only.</li>
            <li>If a student has not paid fees on or before due date, admission is likely to be cancelled
              without any further notice.</li>
            <li>Smoking and Chewing Gum is strictly prohibited in the Complex. If any student is found
              Smoking or Spitting, strict disciplinary action will be taken.</li>
            <li>Students should not throw eatables and other things in the classroom.</li>
            <li>Students should not litter the premises, classrooms and use all the furniture carefully.</li>
            <li>Mobile phones are to be switched off in the classrooms.</li>
          </ul>
        </Text>
      </Container>
      <Card.img boxShadowSize="lg" mx="auto" src="/about_hacking.jpg" />
    </Box>
  </Base>
)
