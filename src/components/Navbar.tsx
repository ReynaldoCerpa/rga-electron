import React from 'react'
import { Container, Image } from '@mantine/core';
import logo from "../../assets/icon.png"

const Navbar = () => {
  return (
    <Container 
      fluid
      className='flex w-full bg-blue h-16 items-center'>
      <Image 
        className='w-12'
        src={logo}
        withPlaceholder
      />
    </Container>
  )
}

export default Navbar