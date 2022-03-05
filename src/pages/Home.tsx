import React, { ChangeEvent } from 'react';
import Navbar from '../components/Navbar';
import { Container, Input, Text, Button, Transition } from '@mantine/core';
import { useState } from "react"
import { checkTime } from '../utils/checktime';
import { os } from '../utils/computer';
import Alert from '../components/Alert';

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
  const [bodymsg, setBodymsg] = useState("")

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
    setBodymsg("")

    if (id === "" || id.length > 20) {
        setError(true)
        setAlert(true)
        setTitle("Ingrese ID válido")
        setLoading(false)
    } else {
        setDisabled(true)
        if (!disabled) {
            let msg = await checkTime(id)
            
            if (!msg.response) {
                setAlert(true)
                setError(true)
                setTitle(msg.message)
                setLoading(false)
            } else {
                setTitle("Registrado correctamente")
                setAlert(true)
                setBodymsg(msg.message)
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
/*               console.log(os.networkInterfaces().wlp1s0f0u2[1].mac)
              console.log(os.userInfo().username);
              console.log(os.hostname()) */
            }}
          >
            Checar
          </Button>
        </Container>
        <Transition mounted={alert} transition="scale-y" duration={100} timingFunction="ease">
          {(styles)=>(
            <Alert
              styles={styles}
              visible={alert}
              error={error}
              title={title}
              bodymsg={bodymsg}
            />
          )}
        </Transition>
      </Container>
    </Container>
  );
};

export default Home;