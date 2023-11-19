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