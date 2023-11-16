import { graphQlTest } from "./graphql-test";
import { userTest } from "./user-test";

export const assertEq = (v1: any, v2: any) => {
    if (v1 !== v2) {
        throw new Error(`Assert Error: ${v1} !== ${v2}`);
    } else {
        console.log(`Success: ${v1} === ${v2}`);
    }
};

export const assertError = async (func: () => any, errorMessage: string) => {
    try {
        await func();
    } catch (e) {
        if (e.message !== errorMessage) {
            throw new Error(`Assert Error: ${e.message} !== ${errorMessage}`);
        } else {
            console.log(`Success: ${e.message} === ${errorMessage}`);
        }
        return;
    }

    throw new Error(`Assertion Error: No Error Occured when Should`);
};


export const assertNotNullOrUndefined = (v1: any) => {
    if (v1 === null || v1 === undefined) {
        throw new Error(`Assert Error: ${v1} === ${v1}`);
    } else {
        console.log(`Success: ${v1} is not null or undefined`);
    }
}

export const runAllTests = async () => {
    const tests = [userTest, graphQlTest];

    for (let test of tests) {
        await test();
    }
};

