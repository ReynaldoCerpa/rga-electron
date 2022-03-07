import React from 'react'
import { Alert as Alrt } from '@mantine/core';
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const Alert = ({visible, error, title, bodymsg} : props) => {

  return (
      <>
        { visible ?
            <Alrt
                icon={error ? <FaTimesCircle size={16} /> : <FaCheckCircle size={16} />}
                color={error ? "red" : "green"}
                title={title}
            >{ bodymsg.length > 0 ?
            <>
              <h1><b>Nombre:</b> {bodymsg[0]}</h1>
              <h1><b>ID:</b> {bodymsg[1]}</h1>
              <h1><b>Marcó:</b> {bodymsg[2]}</h1>
              <h1><b>Horas:</b> {bodymsg[3]}</h1>
            </>
            : null
            }</Alrt>
            : null
        }
      </>
  )
}

interface props {
    visible: boolean;
    error: boolean;
    title: string;
    bodymsg: string[];
}

export default Alert