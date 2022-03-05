import { headers } from "../config/headers"
import { online } from "./isOnline";
import { systemInfo } from "./system/os";

export const checkTime = async (id : string) : Promise<Message> => {

    const values = {
        idGuia: id,
        mac: systemInfo.mac,
        username: systemInfo.username,
        hostname: systemInfo.hostname
    }

    let msg : Message;
    let res : boolean;
    let message : string;

    try {
        let isOnline = await online()
        if (isOnline) {
           const response = await fetch(`http://localhost:8080/guides/checkTime`, {
                   method: "post",
                   headers: headers,
                   body: JSON.stringify(values)
               }
           );
           if(response.ok){
               const data = await response.json();
                res = response.ok
                message = data
           } else {
               const data = await response.json();
               res = response.ok
               message = data
           }
        } else {
            res = false
            message = "No hay conexión a internet"
        }
    } catch (e) {
        console.log(e);
        res = false
        message = "Ocurrió un error"
    }  
    return msg = {
        response : res,
        message : message
    }
}

interface Message {
    response: boolean;
    message: string;
}