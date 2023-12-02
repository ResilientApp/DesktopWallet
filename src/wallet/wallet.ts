import { sleep } from "../utils";
import WalletGraphQLClient from "./graphql";
import { GetTransationResult, WalletGetTransactionsResult } from "./structures";
import User from "./user";

export class Wallet {
    user: User;
    graphqlClient: WalletGraphQLClient;

    init = async (
        username: string,
        password: string,
        mode: "login" | "registration"
    ) => {
        const user = new User();
        await user.init(username, password, mode);
        this.user = user;
        this.graphqlClient = new WalletGraphQLClient(user);

    };

    // returns transaction id
    sendToken = async (
        amount: number,
        recipientPublicKey: string
    ): Promise<string> => {
        return await this.graphqlClient.postTransation(
            amount,
            recipientPublicKey
        );
    };

    getTransaction = async (
        transactionID: string
    ): Promise<GetTransationResult> => {
        return await this.graphqlClient.getTransaction(transactionID);
    };

    getWalletContent = async () => {

        await sleep(2000);
 
        const { transactionsSent, transactionsReceived } =
            await this.getPastTransactions();

        return (
            transactionsReceived.reduce(
                (a, b) => ({ amount: a.amount + b.amount }),
                { amount: 0 }
            ).amount -
            transactionsSent.reduce(
                (a, b) => ({ amount: a.amount + b.amount }),
                { amount: 0 }
            ).amount
        );
        return 1;
    };

    getPastTransactions = async (): Promise<WalletGetTransactionsResult> => {
        const transactionsSent =
            await this.graphqlClient.getFilteredTransactions(
                this.user.publicKey
            );
        const transactionsReceived =
            await this.graphqlClient.getFilteredTransactions(
                null,
                this.user.publicKey
            );
        return {
            transactionsSent,
            transactionsReceived,
        };
    };

    postTransation = async (amount: number, recipientPublicKey: string, data?: object) => {
        return await this.graphqlClient.postTransation(amount, recipientPublicKey, data);
    }

    getPublicPrivateKeys = async () => {
        return {
            publicKey: this.user.publicKey,
            privateKey: this.user.privateKey,
        }
    }

    print = async (...args: any) => {
        console.log(...args);
    };

    
}
