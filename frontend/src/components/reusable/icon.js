import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Icon(props) {
  const { iconName } = props
  return (
    <>
      <FontAwesomeIcon icon={iconName} />
    </>
  )
}
