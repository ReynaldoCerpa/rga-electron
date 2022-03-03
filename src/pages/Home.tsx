import React, { ChangeEvent } from 'react';
import Navbar from '../components/Navbar';
import { Container, Input, Text, Button } from '@mantine/core';
import { useState } from "react"
import { checkTime } from '../utils/checktime';
import { os } from '../utils/computer';

const Home: React.FC = () => {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("Datos incorrectos")
  const [id, setId] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleInput = ( e : ChangeEvent<HTMLInputElement>) => {
    if (!regex.test(e.target.value) && e.target.value.length < 15 && e.target.value.indexOf(" ") === -1) {
      setId(e.target.value.toUpperCase())
    }
  }

  const handleSubmit = async (id : string) => {
    setError(false)
    setAlert(false)
    setLoading(true)
    if (id === "" || id.length > 20) {
        setError(true)
        setErrorMsg("Ingrese ID válido")
        setLoading(false)
    } else {
        setDisabled(true)
        if (!disabled) {
            let msg = await checkTime(id)
            if (!msg[0]) {
                setError(true)
                setErrorMsg(msg[1])
                setLoading(false)
            } else {
                setAlert(true)
                setAlertMsg(msg[1])
                setLoading(false)
            }
        }
        setTimeout(() => {
            setDisabled(false) //prevents user spamming ids with timer
            setId("")
        }, 1000);
        setTimeout(() => {
            setAlert(false)
        }, 10000);
    }
  }

  return (
    <Container
      fluid
      padding={0}
    >
      <Navbar/>
      <Container 
      fluid
      className='h-full bg-white w-full flex flex-col items-center'>
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
            value={id}
            onInput={handleInput}
          />
          <Button
            className='bg-blue'
            size='md' 
            type='submit'
            onClick={() => {
              console.log(os.networkInterfaces().wlp1s0f0u2[1].mac)
              console.log(os.userInfo().username);
              console.log(os.hostname())
              
            }}
          >
            Checar
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;