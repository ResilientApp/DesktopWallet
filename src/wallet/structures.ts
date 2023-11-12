

export interface GetTransationResult {
    id: string;
    version: string;
    amount: number;
    metadata: any;
    operation: any;
    asset: Object;
    publicKey: string;
    uri: string;
    type: string;
}