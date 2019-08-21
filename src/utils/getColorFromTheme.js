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
