import React from 'react'
import {
  ThemeProvider,
  Section,
  Heading,
  Box,
  Container,
  mediaQueries
} from '@hackclub/design-system'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Nav from 'components/Nav'
import Bio from 'components/Bio'
import Footer from 'components/Footer'

const Header = Section.extend`
  padding-top: 0 !important;
  background-color: ${props => props.theme.colors.red[5]};
  background-image: linear-gradient(
    -2deg,
    ${props => props.theme.colors.orange[4]} 0%,
    ${props => props.theme.colors.red[5]} 50%,
    ${props => props.theme.colors.red[6]} 100%
  );
`

const Base = Container.extend`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  ${mediaQueries[1]} {
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

export default () => (
  <ThemeProvider>
    <Helmet title="Toppers – SEB Tutorials" />
    <Header>
      <Nav />
      <Heading.h2 color="white" align="center" caps mt={3}>
        <Box f={4}>SEB Tutorials</Box>
        <Box f={6}>Toppers</Box>
      </Heading.h2>
    </Header>
    <Base py={[4, 5]} px={3}>
      <Bio
        img="/team/zach.png"
        name="Pratham Jain"
        role="Bishops Kalayni Nagar"
        text="I really feel proud and confident of SEB tutorials and their brilliant teaching. The teachers helped me a lot at whenever I had any difficulties. I would especially like to thank Soeb sir & and all the teachers as it was because of them, I was able to score such good marks in my Board examination. It was Soeb sir who made sure that all the students fall in line and get their best results. It was a fun loving experience at SEB Tutorials. We did not only study but also enjoyed a lot and made many good memories which I will always remember."
        bg="red"
      />
      <Bio
        img="/team/max.jpg"
        name="Govind Milani"
        role="Bishops Camp"
        text="I had a very good experience at SEB Tutorials. I studied at SEB Tutorials for 3 years and all teachers here taught me very well and explained me each and every topic thoroughly. I am grateful to all the teachers especially Soeb Sir for helping me score 91% in my 2017 ICSE Board Examination."
        bg="yellow"
      />
      <Bio
        img="/team/lachlan.jpg"
        name="Rutuja Bomble"
        role="Helenas"
        text="For a year I have been here, the support and guidance I have received is marvelous. All the specialized teachers here including Soeb Sir, Tahera mam, Joshi sir have been encouraging throughout . Not only the tutorials but also the notes and the test series have helped me to get where I am."
        bg="blue"
      />
      <Bio
        img="/team/mingjie.jpg"
        name="Daanish Singh"
        role="Bishops Camp"
        text="I was in SEB Tutorials for 2 yrs . In these 2 years, I learnt many things. All the teachers explained me all the concepts in such a way that I will never forget them. There were regular tests which sharpened my memory. The tests helped me to build self confidence. I would really like to thank Soeb sir and all the teachers for my wonderful experience."
        bg="orange"
      />
      <Bio
        img="/team/athul.jpg"
        name="Nabeel Shaikh"
        role="Vibgyor"
        text="SEB Tutorials is one of the best classes I have been to. The teachers here have helped me alot in overcoming my weak points. Great Experience for a 10th std student."
        bg="violet"
      />
    </Base>
    <Footer />
  </ThemeProvider>
)
