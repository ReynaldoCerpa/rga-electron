const os = require("os")

interface sysInfo {
    mac: string,
    username: string,
    hostname: string
}

let mac = ( os.networkInterfaces()["Wi-Fi"] !== undefined ) ? os.networkInterfaces()["Wi-Fi"][0].mac : os.networkInterfaces().wlp1s0f0u2[1].mac;
let username = os.userInfo().username;
let hostname = os.hostname();

export let systemInfo : sysInfo = {
    mac : mac,
    username : username,
    hostname : hostname
    // mac : mac.wlp1s0f0u2[1].mac,
    // username : username,
    // hostname : hostname
}

/*               console.log(os.networkInterfaces().wlp1s0f0u2[1].mac)
              console.log(os.userInfo().username);
              console.log(os.hostname()) */