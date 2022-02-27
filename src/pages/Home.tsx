import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Input, Text, Button } from '@mantine/core';

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Container className='h-full bg-white w-full flex flex-col items-center'>
        <Text
          className='text-3xl my-4' 
          weight={800}
        >Ingrese su ID</Text>

        <Container
          className='w-72 m-0 p-0 my-3 flex'
        >
          <Input
            placeholder='ID'
            size='md'
          />
          <Button
            className='bg-blue'
            size='md' 
            type='submit'
          >
            Checar
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Home;