import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'
import mediaQueries from '../utils/mediaQueries'

/**
 * Themed card component that displays detailed informations - name, photo, responsiblites and brief introduction.
 *
 * @version 1.0.1
 * @author [Saad Ishfaq]
 */

const styles = theme => {
  const { weights: fontWeights, sizes: fontSizes } = theme.font
  const { spacing: spacings } = theme

  const styleJson = {
    cardWrapper: {
      width: '90%',
      'min-width': '480px',
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
      width: '100%',
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
        'gray01',
        'gray10',
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
      color: getColorFromTheme(theme, 'black', 'white', 'black')
    },
    container: {
      'margin-left': spacings.large,
      'margin-top': spacings.base
    },

    name: {
      'font-size': fontSizes.base.fontSize,
      'line-height': fontSizes.base.lineHeight,
      'font-family': fontWeights.bold.fontFamily,
      'font-weight': fontWeights.bold.fontWeight,
      'margin-bottom': spacings.small
    },

    caption: {
      'font-size': fontSizes.caption.fontSize,
      'line-height': fontSizes.caption.lineHeight,
      'font-family': fontWeights.semibold.fontFamily,
      'font-weight': fontWeights.semibold.fontWeight,
      'margin-bottom': spacings.xxxSmall
    },

    content: {
      'font-size': fontSizes.xsmall.fontSize,
      'line-height': fontSizes.xsmall.lineHeight,
      'font-family': fontWeights.semibold.fontFamily,
      'font-weight': fontWeights.semibold.fontWeight,
      'margin-bottom': spacings.xxSmall
    },
    info: {
      'margin-bottom': spacings.small
    },

    close: {
      'margin-right': '13px',
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      height: '10px'
    },

    closeIcon: {
      color: getColorFromTheme(theme, 'black', 'white', 'black'),
      display: 'inline-block',
      width: spacings.xsmall,
      position: 'absolute',
      top: '0',
      right: '0.5rem',
      '&:hover': {
        color: getColorFromTheme(theme, 'gray12', 'gray04', 'white')
      }
    },
    [`@media (min-width: ${mediaQueries[0]}px)`]: {
      cardWrapper: {
        width: '100%'
      },
      container: {
        'margin-left': spacings.large,
        'margin-top': spacings.xxxLarge
      },

      name: {
        'font-size': fontSizes.title2.fontSize,
        'line-height': fontSizes.title2.lineHeight,
        'margin-bottom': spacings.base
      },

      caption: {
        'font-size': fontSizes.caption.fontSize,
        'line-height': fontSizes.caption.lineHeight,
        'font-family': fontWeights.semibold.fontFamily,
        'font-weight': fontWeights.semibold.fontWeight,
        'margin-bottom': spacings.xxxSmall
      },

      content: {
        'font-size': fontSizes.xsmall.fontSize,
        'line-height': fontSizes.xsmall.lineHeight,
        'font-family': fontWeights.semibold.fontFamily,
        'font-weight': fontWeights.semibold.fontWeight,
        'margin-bottom': spacings.xxSmall
      },
      info: {
        'margin-bottom': spacings.small
      }
    },
    [`@media (min-width: ${mediaQueries[1]}px)`]: {
      container: {
        'margin-left': spacings.large,
        'margin-top': spacings.xxxLarge
      },

      name: {
        'font-size': fontSizes.title.fontSize,
        'line-height': fontSizes.title.lineHeight,
        'margin-bottom': spacings.base
      },

      caption: {
        'font-size': fontSizes.base.fontSize,
        'line-height': fontSizes.base.lineHeight,
        'font-family': fontWeights.bold.fontFamily,
        'font-weight': fontWeights.bold.fontWeight,
        'margin-bottom': spacings.xxxSmall
      },

      content: {
        'font-size': fontSizes.caption.fontSize,
        'line-height': fontSizes.caption.lineHeight,
        'margin-bottom': spacings.xxSmall
      },
      info: {
        'margin-bottom': spacings.small
      }
    },
    [`@media (min-width: ${mediaQueries[2]}px)`]: {
      container: {
        'margin-left': spacings.xxxLarge,
        'padding-left': spacings.base,
        'margin-top': spacings.xxxLarge,
        'padding-top': spacings.xxxLarge
      },

      name: {
        'font-size': fontSizes.title.fontSize,
        'line-height': fontSizes.title.lineHeight,
        'margin-bottom': spacings.base
      },

      caption: {
        'font-size': fontSizes.title2.fontSize,
        'line-height': fontSizes.title2.lineHeight,
        'margin-bottom': spacings.xxxSmall
      },

      content: {
        'font-size': fontSizes.base.fontSize,
        'line-height': fontSizes.base.lineHeight,
        'margin-bottom': spacings.xxSmall
      },
      info: {
        'margin-bottom': spacings.small
      }
    }
  }
  return styleJson
}

const InfoCard = ({ classes, name, responsiblities, photo, aboutMe }) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <div className={classes.portrait}>
          <img className={classes.photo} src={photo} alt={'Portrait'} />
        </div>
        <div className={classes.rightPanel}>
          <div className={classes.close}>
            <i className={'material-icons ' + classes.closeIcon}>clear</i>
          </div>

          <div className={classes.container}>
            <div className={classes.name}>{name}</div>
            <div className={classes.info}>
              <div className={classes.caption}>Email</div>
              <div className={classes.content}>daniel@metknow.com</div>
            </div>
            <div className={classes.info}>
              <div className={classes.caption}>Responsiblities</div>
              {responsiblities.map((resp, idx) => (
                <div key={idx} className={classes.content}>
                  {resp}
                </div>
              ))}
            </div>
            <div className={classes.info}>
              <div className={classes.caption}>About Me</div>
              <div className={classes.content}>{aboutMe}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  /**
   * Name of character
   */
  name: PropTypes.string.isRequired,
  /**
   * Responsiblities which is type of 'array'.
   */
  responsiblities: PropTypes.array,
  /**
   * Photo url
   */
  photo: PropTypes.string,
  /**
   * Brief introduction.
   */
  aboutMe: PropTypes.string
}

InfoCard.defaultProps = {
  name: '',
  responsiblities: PropTypes.array,
  photo: '',
  aboutMe: ''
}

export default injectSheet(styles, { injectTheme: true })(InfoCard)
