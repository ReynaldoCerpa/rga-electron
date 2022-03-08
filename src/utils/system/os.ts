const os = require("os")

let mac : string;
const username = os.userInfo().username;
const hostname = os.hostname();
const netInterface = os.networkInterfaces()

if (os.networkInterfaces()["Wi-Fi"] || os.networkInterfaces()["wlp1s0f0u2"]) {
    mac = ( os.networkInterfaces()["Wi-Fi"] !== undefined )
        ? os.networkInterfaces()["Wi-Fi"][0].mac
        : os.networkInterfaces().wlp1s0f0u2[1].mac;
} else {
    mac = "Unknown"
}

interface sysInfo {
    mac: string,
    username: string,
    hostname: string,
    networkInterface: string
}

export const systemInfo : sysInfo = {
    mac : mac,
    username : username,
    hostname : hostname,
    networkInterface: netInterface
}