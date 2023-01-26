import React from 'react'
import { Button } from '../../ui/atoms/Button/Button'
import { Container } from '../../ui/object/Container/Container'
import { Logo } from '../../ui/atoms/Logo/Logo'
import { Menu } from '../Menu/Menu'
import { HamburgerMenu } from '../../ui/atoms/HamburgerMenu/HamburgerMenu'

export const Header = () => {
  return (
    <header className='h-20 py-3'>
      <Container as='div' className='flex justify-between items-center'>
        <Logo />
        <nav>
          <Menu />
          <HamburgerMenu />
          <Button>Download</Button>
        </nav>
      </Container>
    </header>
  )
}
