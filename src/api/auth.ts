import { ipcRenderer } from "electron";

// export const initWallet = async (...args: any[]) =>
//     await ipcRenderer.invoke("demo:print", ...args);

export const initWallet = async (
    username: string,
    password: string,
    mode: "login" | "registration"
) => await ipcRenderer.invoke("auth:initWallet", username, password, mode);


export const getPublicPrivateKeys = async (): Promise<{publicKey: string, privateKey: string}> => await ipcRenderer.invoke("auth:getPublicPrivateKeys");