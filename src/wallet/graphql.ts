import { request, gql, GraphQLClient } from "graphql-request";
import { appName, appVersion, graphQLURL } from "../configs";
import User from "./user";
import { GetTransationResult, PostTransactionResult, GetFilteredTransactionsResult, FilteredTransaction } from "./structures";

export default class WalletGraphQLClient {
    client: GraphQLClient;
    user: User;

    constructor(user: User) {
        this.client = new GraphQLClient(graphQLURL);
        this.user = user;
    }

    postTransation = async (
        amount: number,
        recipientPublicKey: string,
        data?: object
    ): Promise<string> => {
        if (!data) {
            data = {
                time: Date.now(),
            };
        }

        data = {
            ...data,
            client: {
                name: appName,
                version: appVersion,
            },
        };
        const doc = gql`
            mutation { postTransaction(data: {
                operation: "CREATE"
                amount: ${amount}
                signerPublicKey: "${this.user.publicKey}"
                signerPrivateKey: "${this.user.privateKey}"
                recipientPublicKey: "${recipientPublicKey}"
                asset: """{
                            "data":  ${JSON.stringify(data)},
                        }"""
                }) 
                {
                    id
                }
            }
        `;

        // console.log(reqObj);
        const resp: { postTransaction: PostTransactionResult } =
            await this.client.request(doc);
        return resp.postTransaction.id;
    };

    getTransaction = async (id: string): Promise<GetTransationResult> => {
        const doc = gql`
            query {getTransaction(id: "${id}") {
                id
                version
                amount
                metadata
                operation
                asset
                publicKey
                uri
                type
            }}
        `;

        const resp: { getTransaction: GetTransationResult } =
            await this.client.request(doc);
        return resp.getTransaction;
    };





    getFilteredTransactions = async (ownerPublicKey?: string, recipientPublicKey?: string): Promise<FilteredTransaction[]> => {


        const doc = gql`
            query {getFilteredTransactions(filter: {
                ownerPublicKey: "${ownerPublicKey || ""}",
                recipientPublicKey: "${recipientPublicKey || ""}"
            }) {
                id
                version
                amount
                metadata
                operation
                asset
                publicKey
                uri
                type
            }}
        `;

        console.log(doc);

        const resp: { data: GetFilteredTransactionsResult } =
            await this.client.request(doc);
        return resp.data.getFilteredTransactions;
    };
}
