import React from 'react'

export const MenuItem = ({ name, routePath }) => {
  return (
    <li className='text-lg'>
      <a href={routePath}>{name}</a>
    </li>
  )
}
