import React, { FC } from 'react'
import { ThemeProvider } from 'theme-ui'

export const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  },
  drawer: {
    container: {
      bg: 'background',
      zIndex: 1,
    },
    mask: {
      bg: 'primary',
      opacity: 0.5,
    },
  },
}

export const Provider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
