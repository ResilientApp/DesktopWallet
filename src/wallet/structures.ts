import {sdkMessageDirectionsPageScript} from '../utils'

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

export interface GetFilteredTransactionsResult {
    getFilteredTransactions: FilteredTransaction[];
}

export interface WalletGetTransactionsResult {
    transactionsReceived: FilteredTransaction[],
    transactionsSent: FilteredTransaction[],
}

export interface FilteredTransaction {
    id: string;
    version: string;
    amount: number;
    metadata: any;
    operation: string;
    asset: string;
    publicKey: string;
    uri: string;
    type: string;
}

export interface FilteredTransactionWithToFrom extends FilteredTransaction {
    to: string;
    from: string;
    time?: number;
}


export type SDKMessage = {
    direction: typeof sdkMessageDirectionsPageScript;
    message?: string;
    amount?: string;
    address?: string;
    ownerPublicKey?: string;
    recipientPublicKey?: string;
};
