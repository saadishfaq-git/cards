/**
 * This function receives color names from each color mode
 * and return color value depending on style value of the theme
 * @param {String} theme  The theme object which is proivded through React Context API
 * @param {String} light  Color name from light theme
 * @param {String} dark   Color name from dark theme
 * @param {String} highContrast Color name from high-contrast theme
 * @param {String} avatar Color name from a special category called 'avartar'
 * @return {String}       Color value from the theme.
 */
const getColorFromTheme = (theme, light, dark, highContrast, avatar) => {
  let resultColor = '#FFF'
  const { colors } = theme
  try {
    if (avatar === undefined) {
      switch (theme.style) {
        case 0:
          resultColor = colors.light[light]
          break
        case 1:
          resultColor = colors.dark[dark]
          break
        case 2:
          resultColor = colors.highContrast[highContrast]
          break
        default:
          resultColor = colors.light[light]
      }
    } else {
      resultColor = colors.avatar[avatar]
    }
  } catch (error) {
    console.log(
      `Color does not exist in the theme: ${light +
        ' ' +
        dark +
        ' ' +
        highContrast +
        ' ' +
        avatar}`
    )
  }
  return resultColor
}

export default getColorFromTheme
