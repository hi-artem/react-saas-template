import React, { Fragment, Suspense } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch } from 'react-router-dom'
import theme from './theme'
import GlobalStyles from './GlobalStyles'
import * as serviceWorker from './serviceWorker'
import Pace from './shared/components/Pace'

import Main from './logged_out/components/Main'

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Main />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

serviceWorker.register()

export default App
