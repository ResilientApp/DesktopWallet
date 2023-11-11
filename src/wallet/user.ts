import nacl from "tweetnacl";
import base58 from "bs58";
import crypto from "crypto";
import keytar from "keytar";

class User {
    publicKey: string;
    privateKey: string;
    encryptedPrivateKey: string;
    username: string;
    passwordHash: string;

    async init(
        username: string,
        password: string,
        mode: "login" | "registration"
    ) {
        this.username = username;

        if (mode === "login") {
            // login case
            await this.retrieveExistingWallet(password);
        } else {
            // registration case
            await this.createNewWallet(password);
        }
    }

    static hashPassword = (password: string) => {
        return crypto.createHash("sha512").update(password).digest("hex"); // hashes the password
    };

    retrieveExistingWallet = async (password: string) => {
        const result = await keytar.getPassword(appName, this.username);
        if (!result) {
            throw new Error("Unable to Retrieve User");
        }
        const { passwordHash, publicKey, encryptedPrivateKey } =
            JSON.parse(result);
        this.passwordHash = passwordHash;
        this.publicKey = publicKey;
        this.encryptPrivateKey = encryptedPrivateKey;

        const inputedPasswordHash = User.hashPassword(password);
        if (inputedPasswordHash !== this.passwordHash) {
            throw new Error("Invalid User Password");
        }

        this.decryptPrivateKey(password);
    };

    static createKeyValPair = () => {
        const pair = nacl.sign.keyPair(); // keypair
        const publicKey = base58.encode(pair.publicKey); //public key
        const privateKey = base58.encode(pair.secretKey.slice(0, 32)); // private key
        return { publicKey, privateKey };
    };

    createNewWallet = async (password: string) => {
        const { publicKey, privateKey } = User.createKeyValPair(); // creates a pair of keys for user
        this.publicKey = publicKey; // user public key
        this.privateKey = privateKey; // user private key

        this.passwordHash = User.hashPassword(password);

        this.encryptPrivateKey(password);

        await this.writeUserAccountToFile();
    };

    writeUserAccountToFile = async () => {
        await keytar.setPassword(
            appName,
            this.username,
            JSON.stringify({
                passwordHash: this.passwordHash,
                publicKey: this.publicKey,
                encryptedPrivateKey: this.encryptPrivateKey,
            })
        );
    };

    encryptPrivateKey = (password: string) => {
        const cipher = crypto.createCipheriv("aes-256-gcm", password, cipherIV);
        this.encryptedPrivateKey =
            cipher.update(this.privateKey, "utf-8", "hex") +
            cipher.final("hex");
    };

    decryptPrivateKey = (password: string) => {
        const decipher = crypto.createDecipheriv(
            "aes-256-gcm",
            password,
            cipherIV
        );
        this.privateKey =
            decipher.update(this.encryptedPrivateKey, "hex", "utf-8") +
            decipher.final("utf-8");
    };
}
