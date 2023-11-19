import { ipcRenderer } from "electron";

// export const initWallet = async (...args: any[]) =>
//     await ipcRenderer.invoke("demo:print", ...args);

export const getWalletContent = async (
) => await ipcRenderer.invoke("transactions:getWalletContent");


export const getPastTransactions = async () => await ipcRenderer.invoke("transactions:getPastTransactions")

export const postTransation = async () => await ipcRenderer.invoke("transactions:postTransation");

