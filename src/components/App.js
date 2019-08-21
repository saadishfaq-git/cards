import React from 'react'
import { ThemeProvider } from 'react-jss'
import PortraitCard from './PortraitCard'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import photo from '../images/photo.png'

const defaultTheme = {
  style: 0,
  colors: {
    transparent: 'transparent',
    light: {
      black: '#252424',
      white: '#FFFFFF',
      bar: '#33344A',
      gray01: '#4E586A',
      gray02: '#5c5b5b',
      gray03: '#717070',
      gray04: '#929191',
      gray06: '#bdbdbd',
      gray08: '#dfdede',
      gray10: '#F3F2F1',
      gray12: '#f4f4f4',
      gray13: '#F8F8F9',
      gray14: '#F9F8F7',
      brand00SemiTransparent: '#9496CA',
      brand00Dark: '#6264A7',
      brand00: '#6264A7',
      brand02: '#33344A',
      brand04: '#464775',
      brand06: '#6264A7',
      brand08: '#8B8CC7',
      brand12: '#BDBDE6',
      brand14: '#E2E2F6',
      brand16: '#F4F4FC',
      orchid: '#943670',
      magenta: '#B24782',
      red: '#C4314B',
      red02: '#8E192E',
      red04: '#A72037',
      red06: '#C4314B',
      red08: '#F3D6D8',
      orange: '#E97548',
      orange04: '#CC4A31',
      yellow: '#F8D22A',
      green: '#92C353'
    },
    dark: {
      black: '#201F1F',
      white: '#FFFFFF',
      bar: '#3B3A3A',
      gray02: '#c7c6c6',
      gray03: '#b1b0b0',
      gray04: '#8f8f8f',
      gray06: '#636262',
      gray08: '#414040',
      gray10: '#2d2c2c',
      gray12: '#2b2a2a',
      gray13: '#313136',
      gray14: '#292828',
      brand00SemiTransparent: '#7174AA',
      brand00Light: '#6264A7',
      brand00: '#6264A7',
      brand02: '#E2E2F6',
      brand04: '#BDBDE6',
      brand06: '#A6A7DC',
      brand08: '#8B8CC7',
      brand12: '#6264A7',
      brand14: '#464775',
      brand16: '#33344A',
      orchid: '#AE3D84',
      magenta: '#CF6098',
      red: '#D74654',
      red02: '#8E192E',
      red04: '#A72037',
      red06: '#C4314B',
      red08: '#4F232B',
      orange: '#E97548',
      orange04: '#CC4A31',
      yellow: '#F8D22A',
      green: '#92C353'
    },
    highContrast: {
      black: '#000000',
      white: '#FFFFFF',
      yellow: '#FFFF00',
      green: '#30F42C',
      blue: '#00EBFF'
    },
    avatars: {
      avatar1: '#B3DBF2',
      avatar2: '#A7CFE8',
      avatar3: '#64A2CC',
      avatar4: '#62CCDD',
      avatar5: '#92E0EA',
      avatar6: '#ABDDD3',
      avatar7: '#D8E27D',
      avatar8: '#F7B189',
      avatar9: '#EF6950',
      avatar10: '#E6808A',
      avatar11: '#EE9889'
    }
  },
  spacing: {
    xxxSmall: '0.2rem',
    xxSmall: '0.4rem',
    xSmall: '0.8rem',
    small: '1.2rem',
    base: '1.6rem',
    large: '2rem',
    xLarge: '2.4rem',
    xxLarge: '2.8rem',
    xxxLarge: '3.2rem'
  },
  font: {
    weights: {
      semilight: {
        fontFamily:
          "'Segoe UI Light', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
        fontWeight: 300
      },
      regular: {
        fontFamily: "'Segoe UI', Tahoma, Helvetica, Sans-Serif",
        fontWeight: 400
      },
      semibold: {
        fontFamily:
          "'Segoe UI Semibold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
        fontWeight: 600
      },
      bold: {
        fontFamily:
          "'Segoe UI Bold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
        fontWeight: 700
      }
    },
    sizes: {
      title: { fontSize: '2.4rem', lineHeight: '3.2rem' },
      title2: { fontSize: '1.8rem', lineHeight: '2.4rem' },
      base: { fontSize: '1.4rem', lineHeight: '2rem' },
      caption: { fontSize: '1.2rem', lineHeight: '1.6rem' },
      xsmall: { fontSize: '1rem', lineHeight: '1.1rem' }
    }
  }
}

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <PortraitCard name="Daniel Dowd" position="CTO" photo={photo} />
      <InfoCard
        name="Daniel Dowd"
        responsiblities={['Programming', 'Databases']}
        photo={photo}
        aboutMe="I enjoy making software"
      />
      <QuestionCard
        photo={photo}
        names={['Andrew Currinder', 'Will Edwards', 'Daniel Dowd']}
      />
    </div>
  </ThemeProvider>
)

export default App
