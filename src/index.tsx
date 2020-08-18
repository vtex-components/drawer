import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Box } from 'theme-ui'

import { placementValue } from './util'

export interface DrawerProps {
  variant?: string
  placement?: 'top' | 'left' | 'bottom' | 'right'
  isOpen: boolean
  width?: number
  onClose?: () => void
}

const Drawer: FC<DrawerProps> = ({
  variant,
  isOpen = false,
  placement = 'left',
  width = 300,
  children,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const customVariant = variant ? `${variant}.drawer` : 'drawer'

  if (!isOpen) {
    return null
  }

  const widthValue =
    placement === 'left' || placement === 'right'
      ? { maxWidth: width, width: '100%' }
      : { maxHeight: width, height: '100%' }

  return ReactDOM.createPortal(
    <Box variant={customVariant}>
      <Box
        variant={`${customVariant}.container`}
        sx={{
          position: 'fixed',
          zIndex: 1,
          ...widthValue,
          ...placementValue(placement),
        }}
      >
        {children}
      </Box>
      <Box
        variant={`${customVariant}.mask`}
        onClick={onClose}
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
