import WalletGraphQLClient from "./graphql";
import { GetTransationResult } from "./structures";
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

    // getTransation = async ()

    print = async (...args: any) => {
        console.log(...args);
    };
}