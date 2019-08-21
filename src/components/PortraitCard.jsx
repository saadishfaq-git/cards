import React from 'react'
import PropTypes from 'prop-types'
import photo from '../images/photo.png'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'

const styles = theme => ({
  card: {
    width: '230px',
    height: '338px',
    'border-radius': '14px',
    border: `4px solid ${getColorFromTheme(theme, 'gray13', 'white')}`,
    'box-shadow': `0 0 4px ${getColorFromTheme(theme, 'gray02', 'black')}`,
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
    background: getColorFromTheme(theme, 'gray08', 'black'),
    'font-family': theme.font.weights.bold.fontFamily,
    'font-weight': theme.font.weights.bold.fontWeight,
    'font-size': theme.font.sizes.caption.fontSize,
    'line-height': theme.font.sizes.caption.lineHeight,
    display: 'flex',
    'align-items': 'center'
  },
  textArea: {
    'margin-left': theme.spacing.xSmall
  },
  position: {
    color: theme.colors.avatars.avatar4
  }
})

const PortraitCard = ({ classes, name, position }) => {
  console.log(classes)
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
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

PortraitCard.defaultProps = {
  name: '',
  position: ''
}

export default injectSheet(styles, { injectTheme: true })(PortraitCard)
