export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getErrorMessageContent = (emessage: string) => {
    return /Error: (.+)$/g.exec(emessage)[1];
};
