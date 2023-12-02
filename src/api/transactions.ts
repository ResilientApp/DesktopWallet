import { ipcRenderer } from "electron";
import { WalletGetTransactionsResult } from "../wallet/structures";

// export const initWallet = async (...args: any[]) =>
//     await ipcRenderer.invoke("demo:print", ...args);

export const getWalletContent = async (): Promise<number> =>
    await ipcRenderer.invoke("transactions:getWalletContent");

export const getPastTransactions = async (): Promise<WalletGetTransactionsResult> =>
    await ipcRenderer.invoke("transactions:getPastTransactions");

export const postTransation = async (amount: number, recipientPublicKey: string, data?: object, metadata?: string) =>
    await ipcRenderer.invoke("transactions:postTransation", amount, recipientPublicKey, data);
