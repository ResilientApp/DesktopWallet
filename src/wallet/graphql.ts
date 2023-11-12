import { request, gql, GraphQLClient } from "graphql-request";
import { graphQLURL } from "../configs";
import User from "./user";
import { GetTransationResult } from "./structures";

export default class WalletGraphQLClient {
    client: GraphQLClient;
    user: User;

    constructor(user: User) {
        this.client = new GraphQLClient(graphQLURL);
        this.user = user;
    }

    setTransation = async (
        amount: number,
        recipientPublicKey: string,
        data?: Object
    ): Promise<string> => {
        if (!data) {
            data = {
                time: Date.now(),
            };
        }

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
        const resp = await this.client.request(doc);
        return (resp as any).postTransaction.id;
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


    // getFilteredTransactions = async (ownerPublicKey?: string, recipientPublicKey?: string): Promise<GetTransationResult> => {
    //     const doc = gql`
    //         query {getFilteredTransactions(id: "${id}") {
    //             id
    //             version
    //             amount
    //             metadata
    //             operation
    //             asset
    //             publicKey
    //             uri
    //             type
    //         }}
    //     `;

    //     const resp: { getTransaction: GetTransationResult } =
    //         await this.client.request(doc);
    //     return resp.getTransaction;
    // };
}
