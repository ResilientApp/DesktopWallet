
import { ipcRenderer } from "electron";

window.addEventListener('message', (ev: MessageEvent<any>) => {
    if (ev.data) {
        ipcRenderer.invoke('dapp-thirdparty:handleMessage', ev.data);
    }
})