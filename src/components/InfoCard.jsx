import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import getColorFromTheme from '../utils/getColorFromTheme'

const styles = theme => {
  const { weights: fontWeights, sizes: fontSizes } = theme.font
  const { spacing: spacings } = theme

  const styleJson = {
    card: {
      display: 'flex',
      width: '495px',
      height: '350px',
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
      height: spacings.xsmall
    },

    closeIcon: {
      color: getColorFromTheme(theme, 'black', 'white', 'black'),
      display: 'inline-block',
      width: spacings.xsmall,
      position: 'absolute',
      top: 0,
      right: 0,
      '&:hover': {
        color: getColorFromTheme(theme, 'gray12', 'gray12', 'white')
      }
    }
  }
  return styleJson
}

const InfoCard = ({ classes, name, responsiblities, photo, aboutMe }) => {
  return (
    <div className={classes.card}>
      <div className={classes.portrait}>
        <img className={classes.photo} src={photo} alt={'Portrait'} />
      </div>
      <div className={classes.rightPanel}>
        {/* <div className={classes.close}>
          <i className={'material-icons ' + classes.closeIcon}>clear</i>
        </div> */}

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
  )
}

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  responsiblities: PropTypes.array,
  photo: PropTypes.string,
  aboutMe: PropTypes.string
}

InfoCard.defaultProps = {
  name: '',
  responsiblities: PropTypes.array,
  photo: '',
  aboutMe: ''
}

export default injectSheet(styles, { injectTheme: true })(InfoCard)
