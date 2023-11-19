import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";

 
const DAppDirectory: React.FC = () => {

    const [dAppURL, setDAppURL] = useState(process.env.NODE_ENV === 'development' ? 'https://demoresilient.vercel.app/': '');

    const handleDAppGo = () => {
        if (!dAppURL) return;
        let navURL = dAppURL;
        // if (navURL.startsWith('http')) {
        //     navURL = `http://${navURL}`;
        //     api.dapp.openDApp(navURL);
        // }
        api.dapp.openDApp(navURL);
    }


    return (
        <Box>
            <TextField value={dAppURL} onChange={(e) => setDAppURL(e.target.value)}/>
            <Button onClick={handleDAppGo}>Go</Button>

        </Box>
    )
}

export default DAppDirectory;