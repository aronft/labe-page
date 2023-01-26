import React from 'react'

export const Container = ({ as: As = 'div', children, className }) => {
  console.log(className)
  return (
    <As className={`container mx-auto px-4 lg:px-0 ${className}`}>{children}
    </As>
  )
}
