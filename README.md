This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Code snippet:

import React from 'react'
import { ThemeProvider } from 'react-jss'
import PortraitCard from './PortraitCard'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'

/\*\*

- Photo url for cards.
  \*/
  import photo from '../images/photo.png'

const App = () => (
<ThemeProvider theme={defaultTheme}>
<div>
<PortraitCard name="Daniel Dowd" position="CTO" photo={photo} />
<InfoCard
name="Daniel Dowd"
responsiblities={['Programming', 'Databases']}
photo={photo}
aboutMe="I enjoy making software"
/>
<QuestionCard
photo={photo}
names={['Andrew Currinder', 'Will Edwards', 'Daniel Dowd']}
/>
</div>
</ThemeProvider>
)
