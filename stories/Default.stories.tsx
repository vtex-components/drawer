import React from 'react'
import { ThemeProvider } from 'theme-ui'

import Drawer from '../src'

export default {
  title: 'Default',
  component: Drawer,
}

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

export const Text = () => (
  <ThemeProvider theme={theme}>
    <Drawer />
  </ThemeProvider>
)
