import React, {useState} from 'react';

import { Card, Input, CloseButton, Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function SendTransaction() {
    const [publicKey, setPublicKey] = useState("");
    const [publicKeyError, setPublicKeyError] = useState(false);
    const [amount, setAmount] = useState("");
    const [amountError, setAmountError] = useState(false);
    const [metaData, setMetadata] = useState("");
    const [opened, { open, close }] = useDisclosure(false);

    const handleSubmit = async () => {
        console.log(parseInt(amount));

        if (amount === "" || !parseInt(amount) || isNaN(parseInt(amount))) {
            setAmountError(true);
        } else if (amount !== "") {
            setAmountError(false);
        }
        if (publicKey === "") {
            setPublicKeyError(true);
        } else if (publicKey !== "") {
            setPublicKeyError(false);
        }
        if (amount !== "" && publicKey !== "") {
            await api.transactions.postTransation(parseInt(amount), publicKey, metaData ? ({metadata: metaData}) : undefined);
            open();
        }
    };


    return(
        <div style={{ display: "flex", flexDirection: "column"}} >
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            centered
        >
            Congrats! Your transaction has been sent successfully
        </Modal>

        
        <h1 className="headerTitle"> Send a transaction </h1>
            <Card shadow="sm" padding="xl" radius="md" withBorder style={{ width: "40vw", height: "380px" }}>
                <Input.Label required> Enter recipient's public key </Input.Label>
                <TextInput
                    placeholder="Recipient public key"
                    value={publicKey}
                    onChange={(event: any) =>
                        setPublicKey(
                            event.currentTarget.value
                        )
                    }
                    rightSectionPointerEvents="all"
                    rightSection={
                        <CloseButton aria-label="Clear input" onClick={() => setPublicKey("")} style={{ display: publicKey ? undefined : "none" }} />
                    }
                    color="green"
                    required
                    withErrorStyles={false}
                    error={
                        publicKeyError
                            ? "Please fill out this field"
                            : null
                    }

                />
                <br></br>
                <Input.Label required> Enter amount you wish to send </Input.Label>
                <TextInput
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(event) =>
                        setAmount(
                            event.currentTarget.value
                        )
                    }
                    rightSectionPointerEvents="all"
                    rightSection={
                        <CloseButton aria-label="Clear input" onClick={() => setAmount("")} style={{ display: amount ? undefined : "none" }} />
                    }
                    withErrorStyles={false}
                    required
                    error={
                        amountError
                            ? "Please fill out this field"
                            : null
                    }

                />
                <br></br>
                <Input.Label> Metadata (optional) </Input.Label>
                <Input
                    placeholder="Enter metadata"
                    value={metaData}
                    onChange={(event) =>
                        setMetadata(
                            event.currentTarget.value
                        )
                    }
                    rightSectionPointerEvents="all"
                    rightSection={
                        <CloseButton aria-label="Clear input" onClick={() => setMetadata("")} style={{ display: metaData ? undefined : "none" }} />
                    }
                    style={{ marginBottom: "30px" }}
                />
                <Button variant="gradient" color="blue" fullWidth mt="auto" radius="md" gradient={{ from: "cyan", to: "green", deg: 247 }} 
                onClick={handleSubmit} type="submit" >Send</Button>
            </Card>
        </div>
    );
}

export default SendTransaction;