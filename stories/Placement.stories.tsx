import React, { FC } from 'react'
import { ThemeProvider } from 'theme-ui'

import Drawer from '../src'

export default {
  title: 'Placement',
  component: Drawer,
}

const Provider: FC = ({ children }) => {
  const theme = {
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const MyComponent: FC<{ placement: 'top' | 'left' | 'bottom' | 'right' }> = ({
  placement,
}) => (
  <Provider>
    <Drawer isOpen placement={placement}>
      Its My Drawer
    </Drawer>
  </Provider>
)

export const Top = () => <MyComponent placement="top" />

export const Left = () => <MyComponent placement="left" />

export const Bottom = () => <MyComponent placement="bottom" />

export const Right = () => <MyComponent placement="right" />
