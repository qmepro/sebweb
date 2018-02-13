import React from 'react'
import { Flex, Card, Heading, mediaQueries } from '@hackclub/design-system'
import Stat from 'components/Stat'
import { stats } from 'data.json'

const Base = Flex.extend`
  max-width: 48rem;
  margin-bottom: -4rem;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    flex: 1 1 auto;
    padding: 1rem;
    text-align: center;
  }
  > :first-child {
    z-index: 2;
    h2 {
      line-height: 1.125;
    }
  }
  > :last-child {
    flex-flow: row wrap;
    line-height: 1.25;
    margin-top: -1rem;
    max-width: 36rem;
    z-index: 1;
  }
  ${mediaQueries[1]} {
    > div {
      padding: 2rem;
    }
    > :last-child {
      margin-left: -2rem;
    }
  }
`

export default () => (
  <Base
    flexDirection={['column', 'row']}
    align="center"
    justify="center"
    mx="auto"
    px={3}
  >
    <Card boxShadowSize="lg" bg="primary">
      <Heading.h2 color="white" f={6}>
        United as one. Divided by zero.
      </Heading.h2>
    </Card>
    <Card boxShadowSize="lg" bg="accent" color="white">
      <Stat value={stats.school_count} label="schools" />
      <Stat value={stats.country_count} label="countries" />
      <Stat value={stats.state_count} label="states" />
      <Stat value={stats.approximate_members} label="members" />
    </Card>
  </Base>
)
