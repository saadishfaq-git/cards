import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theming from 'styled-theming';
import MyThemeContext from '../contexts/MyThemeContext';

class Button extends React.Component {
  render() {
    return (
      <div>
        <MyThemeContext.Consumer>
          {value => {
            console.log(value);
          }}
        </MyThemeContext.Consumer>
        OK
      </div>
    );
  }
}

export default Button;
