import isOnline from "is-online"

export const online = async () => {
    return await isOnline()
}
