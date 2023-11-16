import { ipcRenderer } from "electron";

export const print = async (...args: any[]) =>
    await ipcRenderer.invoke("demo:print", ...args);
