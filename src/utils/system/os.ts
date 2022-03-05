const os = require("os")

interface sysInfo {
    mac: string,
    username: string,
    hostname: string
}

export let systemInfo : sysInfo = {
    mac : os.networkInterfaces().wlp1s0f0u2[1].mac,
    username : os.userInfo().username,
    hostname : os.hostname()
}

/*               console.log(os.networkInterfaces().wlp1s0f0u2[1].mac)
              console.log(os.userInfo().username);
              console.log(os.hostname()) */