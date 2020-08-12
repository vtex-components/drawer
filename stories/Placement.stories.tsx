import React, { FC } from 'react'

import Drawer from '../src'
import { Provider } from './Provider'

export default {
  title: 'Placement',
  component: Drawer,
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
