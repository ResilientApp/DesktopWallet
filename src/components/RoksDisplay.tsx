import "bootstrap/dist/css/bootstrap.min.css";
import wallet from "../images/wallet.jpeg";

import {
    Card,
    Image,
    Group,
    Text,
    Badge,
    Input,
    CloseButton,
    Container,
    Box,
    Burger,
    Anchor,
    Modal,
    Button,
    TextInput,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useAsync } from "react-use";

export const RoksDisplay = () => {
    const { loading, error, value } = useAsync(
        api.transactions.getWalletContent
    );

    const publicPrivateKeyState = useAsync(api.auth.getPublicPrivateKeys);

    console.log(error);

    return (
        <>
            {loading ? (
                <h2>Loading</h2>
            ) : error ? (
                <h2>Error</h2>
            ) : (
                <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    withBorder
                    style={{ width: "100%" }}
                >
                    <Card.Section>
                        <Image
                            src={wallet}
                            height={160}
                            width={160}
                            alt="Norway"
                        />
                    </Card.Section>
                    <Badge color="pink" variant="light" mt="md" size="lg">
                        Amount of coins left
                    </Badge>
                    <Text fw={500} mt="md">
                        {value} ROK left
                    </Text>
                    <Text fw={500}>Public key: {publicPrivateKeyState.value.publicKey}</Text>
                    <Text fw={500}>Private key: {publicPrivateKeyState.value.privateKey}</Text>

                </Card>
            )}
        </>
    );
};
