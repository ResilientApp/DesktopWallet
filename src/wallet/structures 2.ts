export interface GetTransationResult {
    id: string;
    version: string;
    amount: number;
    metadata: string;
    operation: string;
    asset: object;
    publicKey: string;
    uri: string;
    type: string;
}

export interface PostTransactionResult {
    id: string;
}
