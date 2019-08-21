const getColorFromTheme = (theme, color, highContrast, avatar) => {
  let resultColor = '#FFF'
  try {
    if (avatar === undefined) {
      switch (theme.style) {
        case 0:
          resultColor = theme.colors.light[color]
          break
        case 1:
          resultColor = theme.colors.dark.color[color]
          break
        case 2:
          resultColor = theme.colors.highContrast[highContrast]
          break
        default:
          resultColor = theme.colors.light[color]
      }
    } else {
      resultColor = theme.color.avatar[avatar]
    }
  } catch (error) {
    console.log(`Color does not exist in the theme: ${color}`)
  }
  return resultColor
}

export default getColorFromTheme
