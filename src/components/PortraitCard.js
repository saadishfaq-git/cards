import React from 'react';
import PropTypes from 'prop-types';
import photo from '../images/photo.png';
import { createUseStyles } from 'react-jss';

const getColorFromTheme = (theme, color, highContrast, avatar) => {
  let resultColor = '#FFF';
  try {
    if (avatar === undefined) {
      switch (theme.style) {
        case 0:
          resultColor = theme.colors.light[color];
          break;
        case 1:
          resultColor = theme.colors.dark.color[color];
          break;
        case 2:
          resultColor = theme.colors.highContrast[highContrast];
          break;
        default:
          resultColor = theme.colors.light[color];
      }
    } else {
      resultColor = theme.color.avatar[avatar];
    }
  } catch (error) {
    console.log(`Color does not exist in the theme: ${color}`);
  }
  return resultColor;
};

const useStyles = createUseStyles(theme => ({
  card: {
    width: '230px',
    height: '338px',
    'border-radius': '14px',
    border: `4px solid ${getColorFromTheme(theme, 'gray13', 'white')}`,
    'box-shadow': '0 0 4px grey',
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    margin: 0
  }
}));

const PortraitCard = ({ children, ...props }) => {
  const classes = useStyles();
  const { name, position } = props;
  return (
    <div class={classes.card}>
      <div class="inner-container" />
      <img class="portrait" src={photo} alt="Portrait" />
      <div class="banner">
        <div class="text-area">
          <div class="name">{name}</div>
          <div class="position">{position}</div>
        </div>
      </div>
    </div>
  );
};

PortraitCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

PortraitCard.defaultProps = {
  name: '',
  position: ''
};

export default PortraitCard;
