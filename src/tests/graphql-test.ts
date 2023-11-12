
import User from '../wallet/user';
import WalletGraphQLClient from '../wallet/graphql';
import { assertEq, assertError, assertNotNullOrUndefined } from './test-utils';


// assume user test has ran already
export const graphQlTest = async () => {

    const testReceiver = 'ECJksQuF9UWi3DPCYvQqJPjF6BqSbXrnDiXUjdiVvkyH';

    const u = new User();
    await u.init('testusernameg', 'password123', 'registration');

    console.log(u.publicKey);

    const graphqlClient = new WalletGraphQLClient(u);
    const id = await graphqlClient.setTransation(10, testReceiver);
    assertNotNullOrUndefined(id);

    const getTransationResult = await graphqlClient.getTransaction(id);
    // console.log(getTransationResult);
    assertEq(getTransationResult.id, id);
    assertEq(getTransationResult.amount, 10);
    assertEq(getTransationResult.publicKey, testReceiver);

}