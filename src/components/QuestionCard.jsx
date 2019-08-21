import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'

const styles = theme => {
  const { weights: fontWeights, sizes: fontSizes } = theme.font
  const { spacing: spacings } = theme
  const { colors } = theme
  const styleJson = {
    card: {
      display: 'flex',
      width: '534px',
      height: '372px',
      background: getColorFromTheme(theme, 'gray08', 'gray14', 'white'),
      'border-radius': '14px',
      border: `4px solid ${getColorFromTheme(
        theme,
        'gray14',
        'gray12',
        'white'
      )}`,
      'box-shadow': `0 0 4px ${getColorFromTheme(
        theme,
        'black',
        'gray12',
        'black'
      )}`,
      overflow: 'hidden'
    },

    portrait: {
      overflow: 'hidden',
      margin: 0,
      width: '50%',
      height: '100%'
    },

    photo: {
      display: 'block',
      width: '100%',
      height: '100%'
    },

    rightPanel: {
      width: '50%',
      height: '100%',
      color: 'white'
    },

    container: {
      'margin-left': spacings.large,
      'margin-top': spacings.xLarge
    },

    caption: {
      color: getColorFromTheme(theme, 'black', 'white', 'black'),
      'font-size': fontSizes.base.fontSize,
      'line-height': fontSizes.base.lineHeight,
      'font-family': fontWeights.bold.fontFamily,
      'font-weight': fontWeights.bold.fontWeight
    },

    names: {
      'margin-top': spacings.small
    },
    name: {
      'font-size': fontSizes.xsmall.fontSize,
      'line-height': fontSizes.xsmall.lineHeight,
      'font-family': fontWeights.semibold.fontFamily,
      'font-weight': fontWeights.semibold.fontWeight,
      background: getColorFromTheme(theme, 'gray04', 'gray10', 'black'),
      color: getColorFromTheme(theme, 'gray14', 'white', 'white'),
      'margin-right': spacings.large,
      'margin-bottom': spacings.xSmall,
      'padding-top': spacings.xSmall,
      'padding-right': 0,
      'padding-bottom': spacings.xSmall,
      'padding-left': spacings.xxSmall,
      'box-shadow': `1px 2px 6px 0px ${getColorFromTheme(
        theme,
        'gray02',
        'black',
        'black'
      )}`
    }
  }
  return styleJson
}

const QuestionCard = ({ classes, names, photo }) => {
  return (
    <div className={classes.card}>
      <div className={classes.portrait}>
        <img className={classes.photo} src={photo} alt="" />
      </div>
      <div className={classes.rightPanel}>
        <div className={classes.container}>
          <div className={classes.caption}>Who is this person?</div>
          <div className={classes.names}>
            {names.map(name => (
              <div className={classes.name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

QuestionCard.propTypes = {
  names: PropTypes.array,
  photo: PropTypes.string
}

QuestionCard.defaultProps = {
  name: [],
  photo: ''
}

export default injectSheet(styles, { injectTheme: true })(QuestionCard)
