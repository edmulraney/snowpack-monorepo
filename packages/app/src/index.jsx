import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import { App } from './app'
import { theme } from './theme'

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
