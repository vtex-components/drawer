import React, { useState } from 'react'
import { Button, Flex } from 'theme-ui'

import Drawer from '../src'
import { Provider } from './Provider'

export default {
  title: 'Drawer',
  component: Drawer,
}

export const Default = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  return (
    <Provider>
      <Button onClick={toggle} bg="primary">
        Open Drawer
      </Button>

      <Drawer isOpen={isOpen} onClose={toggle}>
        <Flex sx={{ flexDirection: 'column' }}>
          <Flex>Its My Drawer</Flex>
          <Button onClick={toggle}>Close Drawer</Button>
        </Flex>
      </Drawer>
    </Provider>
  )
}

export const Mounted = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  return (
    <Provider>
      <Button onClick={toggle} bg="primary">
        Open Drawer
      </Button>

      {isOpen ? (
        <Drawer isOpen onClose={toggle}>
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex>Its My Drawer</Flex>
            <Button onClick={toggle}>Close Drawer</Button>
          </Flex>
        </Drawer>
      ) : null}
    </Provider>
  )
}

export const Opened = () => (
  <Provider>
    <Drawer isOpen>Its My Drawer</Drawer>
  </Provider>
)
