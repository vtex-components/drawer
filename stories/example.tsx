import React, { FC } from 'react'
import { ThemeProvider } from 'theme-ui'

export const Provider: FC = ({ children }) => {
  const theme = {
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
