import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'
import mediaQueries from '../utils/mediaQueries'

/**
 * Themed card component that display a question and choices.
 * @version 1.0.1
 * @author [Saad Ishaq]
 */
const styles = theme => {
  const { weights: fontWeights, sizes: fontSizes } = theme.font
  const { spacing: spacings } = theme
  const { colors } = theme
  const styleJson = {
    cardWrapper: {
      width: '90%',
      'min-width': '514px',
      'max-width': mediaQueries[3],
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        'padding-top': '69%'
      }
    },
    card: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
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
      'margin-right': spacings.large,
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
    },
    [`@media (min-width: ${mediaQueries[0]}px)`]: {
      cardWrapper: {
        width: '100%'
      },
      container: {
        'margin-top': spacings.xxxLarge
      },
      caption: {
        'font-size': fontSizes.title2.fontSize,
        'line-height': fontSizes.title2.lineHeight
      },

      names: {
        'margin-top': spacings.base
      },
      name: {
        'margin-bottom': spacings.small,
        'padding-top': spacings.small,
        'padding-bottom': spacings.small,
        'padding-left': spacings.xxSmall
      }
    },
    [`@media (min-width: ${mediaQueries[1]}px)`]: {
      container: {
        'margin-top': spacings.xxxLarge,
        'padding-top': spacings.small
      },
      caption: {
        'font-size': fontSizes.title.fontSize,
        'line-height': fontSizes.title.lineHeight
      },

      names: {
        'margin-top': spacings.large
      },
      name: {
        'font-size': fontSizes.caption.fontSize,
        'line-height': fontSizes.caption.lineHeight,
        'margin-bottom': spacings.small,
        'padding-top': spacings.small,
        'padding-bottom': spacings.small,
        'padding-left': spacings.xxSmall
      }
    },
    [`@media (min-width: ${mediaQueries[2]}px)`]: {
      container: {
        'margin-left': spacings.xxxLarge,
        'margin-right': spacings.xxxLarge,
        'margin-top': spacings.xxxLarge,
        'padding-top': spacings.xxxLarge
      },
      caption: {
        'font-size': fontSizes.title.fontSize,
        'line-height': fontSizes.title.lineHeight
      },

      names: {
        'margin-top': spacings.xxLarge
      },
      name: {
        'font-size': fontSizes.caption.fontSize,
        'line-height': fontSizes.caption.lineHeight,
        'margin-bottom': spacings.large,
        'padding-top': spacings.base,
        'padding-bottom': spacings.base,
        'padding-left': spacings.small
      }
    }
  }
  return styleJson
}

const QuestionCard = ({ classes, names, photo }) => {
  return (
    <div className={classes.cardWrapper}>
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
    </div>
  )
}

QuestionCard.propTypes = {
  /**
   * Names of choice to the question.
   */
  names: PropTypes.array,
  /**
   * Photo url that the question indicates.
   */
  photo: PropTypes.string
}

QuestionCard.defaultProps = {
  name: [],
  photo: ''
}

export default injectSheet(styles, { injectTheme: true })(QuestionCard)
