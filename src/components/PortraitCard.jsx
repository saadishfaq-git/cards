import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'

/**
 * Themed card component that displays a photo, name, position.
 *
 * @version 1.0.1
 * @author [Saad Ishaq]
 */
const styles = theme => {
  const { weights: fontWeights, sizes: fontSizes } = theme.font
  const { spacing: spacings } = theme
  const { colors } = theme
  const styleJson = {
    card: {
      width: '230px',
      height: '338px',
      'border-radius': '14px',
      border: `4px solid ${getColorFromTheme(
        theme,
        'gray13',
        'gray13',
        'white'
      )}`,
      'box-shadow': `0 0 4px ${getColorFromTheme(
        theme,
        'gray02',
        'gray02',
        'black'
      )}`,
      position: 'relative',
      display: 'inline-block',
      overflow: 'hidden',
      margin: 0
    },
    portrait: {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)'
    },
    banner: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '24%',
      opacity: '0.8',
      background: getColorFromTheme(theme, 'gray08', 'gray08', 'white'),
      'font-family': fontWeights.bold.fontFamily,
      'font-weight': fontWeights.bold.fontWeight,
      'font-size': fontSizes.caption.fontSize,
      'line-height': fontSizes.caption.lineHeight,
      display: 'flex',
      'align-items': 'center'
    },
    textArea: {
      'margin-left': spacings.xSmall
    },
    name: {
      color: getColorFromTheme(theme, 'black', 'white', 'black')
    },
    position: {
      color: colors.avatars.avatar4
    }
  }
  return styleJson
}

const PortraitCard = ({ classes, name, position, photo }) => {
  return (
    <div className={classes.card}>
      <img className={classes.portrait} src={photo} alt="Portrait" />
      <div className={classes.banner}>
        <div className={classes.textArea}>
          <div className={classes.name}>{name}</div>
          <div className={classes.position}>{position}</div>
        </div>
      </div>
    </div>
  )
}

PortraitCard.propTypes = {
  /**
   * Name infomation to display
   */
  name: PropTypes.string.isRequired,
  /**
   * Position information to display
   */
  position: PropTypes.string.isRequired,
  /**
   * Photo url for card
   */
  photo: PropTypes.string.isRequired
}

PortraitCard.defaultProps = {
  name: '',
  position: '',
  photo: ''
}

export default injectSheet(styles, { injectTheme: true })(PortraitCard)
