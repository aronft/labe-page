import React from 'react'
import { PAGE_DATA } from '../../../constants/page-data'
import { MenuItem } from './components/MenuItem/MenuItem'

export const Menu = () => {
  return (
    <ul className='md:flex md:justify-between md:gap-4'>
      {PAGE_DATA.menu.map(item => (
        <MenuItem key={item.id} name={item.name} routePath={item.routePath} />
      ))}
    </ul>
  )
}
