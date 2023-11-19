import { ipcRenderer } from "electron";

export const openDApp = async (dAppURL: string) =>
    await ipcRenderer.invoke("dapp:openDApp", dAppURL);
