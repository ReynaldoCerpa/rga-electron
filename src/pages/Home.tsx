import React, { ChangeEvent } from 'react';
import Navbar from '../components/Navbar';
import { Container, Input, Text, Button } from '@mantine/core';
import { useState } from "react"
import { checkTime } from '../utils/checktime';
import Alert from '../components/Alert';
import { format } from '../utils/formatAlert';

const Home: React.FC = () => {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("Datos incorrectos")
  const [id, setId] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("")
  const [bodymsg, setBodymsg] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(10000)

  const handleInput = ( e : ChangeEvent<HTMLInputElement>) => {
    if (!regex.test(e.target.value) && e.target.value.length < 15 && e.target.value.indexOf(" ") === -1) {
      setId(e.target.value.toUpperCase())
    }
  }

  const handleEnter = (e : any) => {
    if (e.key === "Enter") {
        handleSubmit(e.target.value)
    }
  }

  const handleSubmit = async (id : string) => {
    setError(false)
    setAlert(false)
    setLoading(true)
    setBodymsg([])

    if (id === "" || id.length > 20) {
        setError(true)
        setAlert(true)
        setTitle("Ingrese ID válido")
        setLoading(false)
    } else {
        setDisabled(true)
        if (!disabled) {
            const msg = await checkTime(id)
            
            if (!msg.response) {
                setAlert(true)
                setError(true)
                setTitle(msg.message)
                setLoading(false)
                setId("")
            } else {
                const data = format(msg.message);
                setTitle("Registrado correctamente")
                setAlert(true)
                setBodymsg(data)
                setLoading(false)
                setId("")
                setTimer(10000)
            }
        }
        setTimeout(() => {
            setDisabled(false) //prevents user spamming ids with timer
            setLoading(false)
        }, 1000);
        setTimeout(() => {
            setAlert(false)
        }, timer);
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
            onKeyDown={handleEnter}
            disabled={loading}
          />
          <Button
            loading={loading}
            className='bg-blue'
            size='md' 
            type='submit'
            onClick={() => {
              handleSubmit(id)
            }}
          >
            Checar
          </Button>
        </Container>
            <Alert
              visible={alert}
              error={error}
              title={title}
              bodymsg={bodymsg}
            />
      </Container>
    </Container>
  );
};

export default Home;