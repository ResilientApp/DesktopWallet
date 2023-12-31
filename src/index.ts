import { runAllTests } from "./tests/test-utils";
import { Wallet } from "./wallet/wallet";
import { DAppHandler, dappHandlers } from "./wallet/dapp";
import { app, BrowserWindow, ipcMain } from "electron";
import { SDKMessage } from "./wallet/structures";
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const main = async () => {
    // Handle creating/removing shortcuts on Windows when installing/uninstalling.
    if (require("electron-squirrel-startup")) {
        app.quit();
    }

    if (
        process.env.NODE_ENV === "development" &&
        process.argv.includes("--test")
    ) {
        await runAllTests();
        app.quit();
        return;
    }

    const wallet = new Wallet();

    const createWindow = (): void => {
        // Create the browser window.
        const mainWindow = new BrowserWindow({
            height: 800,
            width: 1000,
            webPreferences: {
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            },
        });

        // and load the index.html of the app.
        mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

        // Open the DevTools.
        mainWindow.webContents.openDevTools();
    };

    const handleAPIFunc = (
        name: string,
        func: (...a: unknown[]) => unknown,
        debug = false
    ) => {
        ipcMain.handle(name, (e, ...args) => {
            console.log(`invoking ${name}(${args})`);
            if (debug) return;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const res = func(...args);
            return res;
        });
    };

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on("ready", () => {
        handleAPIFunc("demo:print", wallet.print);

        handleAPIFunc("auth:initWallet", wallet.init);
        handleAPIFunc("auth:getPublicPrivateKeys", wallet.getPublicPrivateKeys);
        handleAPIFunc("transactions:getWalletContent", wallet.getWalletContent);

        handleAPIFunc(
            "transactions:getPastTransactions",
            wallet.getPastTransactions
        );
        handleAPIFunc("transactions:postTransation", wallet.postTransation);

        handleAPIFunc("dapp:openDApp", DAppHandler.openDApp);

        ipcMain.handle("dapp-thirdparty:handleMessage", (e, ev: SDKMessage) => {
            if (e.sender.id in dappHandlers) {
                dappHandlers[e.sender.id].handleMessage(ev);
            }
        });

        createWindow();
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
};

main().then();

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
