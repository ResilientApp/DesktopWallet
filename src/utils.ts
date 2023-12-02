export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getErrorMessageContent = (emessage: string) => {
    return /Error: (.+)$/g.exec(emessage)[1];
};


export const sdkMessageDirections = [
    "commit",
    "get",
    "update",
    "update-multi",
    "filter",
    "account",
];

export const sdkMessageDirectionsPageScript = sdkMessageDirections.map((x) => `${x}-page-script`);

export const sdkMessageDirectionsParse = (fullstring: string) => {
    const loc = fullstring.indexOf('-');
    if (!loc) return fullstring;
    return fullstring.substring(0, loc);
}

export const getTimeFromAsset = (asset: string) => {
    if (!asset) return null;
    console.log(asset.replaceAll(`'`, '"'));
    try {
        const data = JSON.parse(asset.replaceAll(`'`, '"'));
        console.log(data);
        return data?.data?.time; 
    } catch(e) {
        console.log(e);
        return null;
    }
}