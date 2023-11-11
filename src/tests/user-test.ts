
import User from '../wallet/user';
import { assertEq, assertError } from './test-utils';


export const userTest = async () => {
    const u1 = new User();
    await u1.init("testusername", 'password123', 'registration');
    assertEq(u1.username,'testusername');

    const u2 = new User();
    await u2.init('testusername', 'password123', 'login');
    assertEq(u1.privateKey, u2.privateKey);
    assertEq(u1.publicKey, u2.publicKey)


    const u3 = new User();
    assertError(async () => {
        await u3.init('testusername', 'incorrectpassword', 'login');
    }, "Invalid User Password")


    const u4 = new User();
    assertError(async () => {
        await u4.init('incorrectusername', 'incorrectpassword', 'login');
    }, "Unable to Retrieve User")
}