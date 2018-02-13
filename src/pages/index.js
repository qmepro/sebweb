import React from 'react'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Bubbles from 'components/home/Bubbles'
import Stripe from 'components/home/Stripe'
import About from 'components/About'
import Superpower from 'components/home/Superpower'
import Collage from 'components/home/Collage'
import Mosaic from 'components/home/Mosaic'
import Start from 'components/Start'
import Footer from 'components/Footer'
import data from 'data.json'
import {
  ThemeProvider,
  Heading,
  Card,
  Container,
  Flex,
  Box,
  Text,
  Button,
  LargeButton,
  Section,
  Link as A,
  Module,
  mediaQueries,
  cx
} from '@hackclub/design-system'

const Two = Section.extend`
  background-color: ${props => props.theme.colors.orange[5]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.yellow[5]} 0%,
    ${props => props.theme.colors.orange[5]} 100%
  );
`

const Four = Section.extend`
  background-color: ${props => props.theme.colors.violet[6]};
  background-image: linear-gradient(
    16deg,
    ${props => props.theme.colors.violet[5]} 0%,
    ${props => props.theme.colors.violet[6]} 32%,
    ${props => props.theme.colors.indigo[4]} 100%
  );
`

const Modules = Flex.extend.attrs({
  wrap: true,
  justify: 'center',
  mt: 3
})`
  max-width: 64rem;
`

export default () => (
  <ThemeProvider>
    <Nav style={{ position: 'absolute', top: 0 }} mode="cloud" />
    <Bubbles />
    <Stripe />
    <About />
    <Two>
      <Heading.h2 f={[4, 5]}>Our Features</Heading.h2>
      <Modules>
        <Module
          icon="person"
          heading="Faculty"
          body="Experienced & Dedicated Faculty."
        />
        <Module
          icon="note"
          heading="Notes"
          body="Printed notes on all subjects, well prepared by faculties."
        />
        <Module
          icon="compare"
          heading="Test"
          body="Weekly Test."
        />
      </Modules>
      <Modules>
        <Module
          icon="layers"
          heading="Conceptual Clarity"
          body="Focus on Conceptual Clarity."
        />
        <Module
          icon="account_balance"
          heading="Labs"
          body="Practical Lab & Computer Lab Available."
        />
        <Module
          icon="remove_red_eye"
          heading="Attention"
          body="Personal Attention in a batch of 15 students only."
        />
      </Modules>
      <Modules>
        <Module
          icon="class"
          heading="Demo lectures"
          body="Demo lectures available."
        />
        <Module
          icon="extension"
          heading="Counseling"
          body="Regular Counseling & Career Guidance."
        />
        <Module
          icon="favorite"
          heading="Special care"
          body="Special care taken of Weak Students"
        />
      </Modules>
      <Modules>
        <Module
          icon="forum"
          heading="Discussion"
          body="Class-room discussion and participation."
        />
        <Module
          icon="import_contacts"
          heading="Revision"
          body="Revision of every topics of every subjects."
        />
        <Module
          icon="clear_all"
          heading="Test Series"
          body="Test series for all the subjects and comprehensive feedback"
        />
      </Modules>
    </Two>
    <Four>
      <Heading.h2 f={[4, 5]}>
        SEB provides the resources you’ll need to soar.
      </Heading.h2>
      <Modules>
        <Module
          icon="forum"
          heading="Parent Teacher Meeting"
          body=""
        />
        <Module
          icon="chrome_reader_mode"
          heading="Library"
          body=""
        />
        <Module
          icon="voice_chat"
          heading="Pre –Preparation"
          body=""
        />
        <Module
          icon="description"
          heading="Test Analysis"
          body=""
        />
        <Module
          icon="local_activity"
          heading="Air Conditioned Classrooms"
          body=""
        />
        <Module
          icon="wallpaper"
          heading="Science Lab"
          body=""
        />
        <Module
          icon="lightbulb_outline"
          heading="Uninterrupted Power Supply"
        />
        <Module
          icon="local_parking"
          heading="Adequate Parking Space"
        />
      </Modules>
      <Box align="center" mt={4}>
        <LargeButton.link to="/apply" inverted f={[3, 4]}>
          Apply to Hack Club
        </LargeButton.link>
      </Box>
    </Four>
    <Superpower />
    <Collage />
    <Mosaic />
    <Start />
    <Footer />
  </ThemeProvider>
)
