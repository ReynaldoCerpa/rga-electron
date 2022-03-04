import React from 'react'
import { Alert as Alrt, Transition } from '@mantine/core';
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const Alert = ({visible, error, title, bodymsg} : props) => {

  return (
      <>
        {   
            <Transition mounted={visible} transition="scale-y" duration={400} timingFunction="ease">
                {()=>(
                    <Alrt
                        icon={error ? <FaTimesCircle size={16} /> : <FaCheckCircle size={16} />}
                        color={error ? "red" : "green"}
                        title={title}
                    >{bodymsg}</Alrt>
                )}
            </Transition>
        }
      </>
  )
}


interface props {
    visible: boolean;
    error: boolean;
    title: string;
    bodymsg: string;
}

export default Alert