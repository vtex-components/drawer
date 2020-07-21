import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Box } from 'theme-ui'

import { placementValue } from './util'

interface Props {
  prefix?: string
  placement?: 'top' | 'left' | 'bottom' | 'right'
  isOpen: boolean
  width?: number
  onClose?: () => void
}

const Drawer: FC<Props> = (props) => {
  const {
    prefix = 'vtex-components',
    isOpen = false,
    placement = 'left',
    width = 300,
  } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const prefixClassName = `${prefix}-drawer`

  if (!isOpen) {
    return null
  }

  const widthValue =
    placement === 'left' || placement === 'right'
      ? { width }
      : { height: width }

  return ReactDOM.createPortal(
    <Box variant={prefixClassName}>
      <Box
        variant={`${prefixClassName}-container`}
        sx={{
          bg: 'background',
          position: 'absolute',
          zIndex: 1,
          ...widthValue,
          ...placementValue(placement),
        }}
      >
        {props.children}
      </Box>
      <Box
        variant={`${prefixClassName}-mask`}
        onClick={props.onClose}
        sx={{
          bg: 'primary',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.5,
        }}
      />
    </Box>,
    document.body
  )
}

export default Drawer
