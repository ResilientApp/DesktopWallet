import { ipcRenderer } from "electron";
import * as demo from "./demo";
import * as auth from "./auth";
import * as dapp from "./dapp";
import * as transactions from "./transactions";
export default {
    demo,
    auth,
    transactions,
    dapp,
};
