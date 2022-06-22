import React from 'react'

export function Dp(props) {
  const { link, height = 40, width = 40, className } = props
  return (
    <>
      <img
        alt=""
        src={link}
        height={height}
        width={width}
        className={"rounded-circle " + className}
      />
    </>
  )
}
