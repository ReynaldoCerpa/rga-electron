import React, { CSSProperties } from 'react'
import { Alert as Alrt } from '@mantine/core';
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const Alert = ({visible, error, title, bodymsg, styles} : props) => {

  return (
      <>
        { visible ?
            <Alrt
                style={styles}
                icon={error ? <FaTimesCircle size={16} /> : <FaCheckCircle size={16} />}
                color={error ? "red" : "green"}
                title={title}
            >{bodymsg}</Alrt>
            : null
        }
      </>
  )
}


interface props {
    visible: boolean;
    error: boolean;
    title: string;
    bodymsg: string;
    styles: CSSProperties
}

export default Alert