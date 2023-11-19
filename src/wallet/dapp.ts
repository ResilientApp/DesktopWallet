declare const DAPP_PRELOAD_WEBPACK_ENTRY: string;

import { BrowserWindow, ipcMain } from "electron";
import { SDKMessage } from "./structures";
import { Wallet } from "./wallet";

export const dappHandlers: {
    [key: string]: DAppHandler;
} = {};

export class DAppHandler {
    window: BrowserWindow;
    wallet: Wallet;

    static openDApp = async (dAppURL: string, wallet: Wallet) => {
        const handler = new DAppHandler(wallet);
        await handler.init(dAppURL);
    };

    constructor(wallet: Wallet) {
        this.wallet = wallet;
    }

    init = async (dAppURL: string) => {
        this.window = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: DAPP_PRELOAD_WEBPACK_ENTRY,
            },
        });
        await this.window.loadURL(dAppURL);
        this.window.webContents.openDevTools();
        dappHandlers[this.window.webContents.id] = this;
    };

    handleMessage = async (message: SDKMessage) => {
        console.log(message);
    }
}
