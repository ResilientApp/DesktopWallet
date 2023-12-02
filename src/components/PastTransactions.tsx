import "bootstrap/dist/css/bootstrap.min.css";

import {
    Card,
    Image,
    Group,
    Text,
    Badge,
    Button,
    Input,
    CloseButton,
    Container,
    Box,
    Burger,
    Anchor,
} from "@mantine/core";
import "@mantine/core/styles.css";
import moment from 'moment';

import { useAsync } from "react-use";
import {
    FilteredTransaction,
    FilteredTransactionWithToFrom,
} from "../wallet/structures";
import { getTimeFromAsset } from "../utils";

export const PastTransactions = () => {
    const { loading, error, value } = useAsync(
        api.transactions.getPastTransactions
    );

    console.log(value);

    let transactions: FilteredTransactionWithToFrom[] = [];
    if (value) {
        transactions = [
            ...value.transactionsReceived.map((t) => ({
                ...t,
                to: "Self",
                from: "Anonymous",
            })),
            ...value.transactionsSent.map((t) => ({
                ...t,
                from: "Self",
                to: t.publicKey,
            })),
        ].map(t => ({...t, time: getTimeFromAsset(t.asset)})).sort((a,b) => b.time-a.time);
        console.log(transactions);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                flexWrap: "wrap",
                // justifyContent: "center",
            }}
        >
            {loading ? (
                <h2>Transactions Loading</h2>
            ) : error ? (
                <h2>Error Fetching Transactions</h2>
            ) : (
                <>
                    {transactions.map((t) => (
                        <PastTransaction
                            key={t.id}
                            amount={t.amount}
                            to={t.to}
                            from={t.from}
                            id={t.id}
                            time={t.time}
                       
                        />
                    ))}
                </>
            )}
        </div>
    );
};

interface PastTransactionProps {
    amount: number;
    to: string;
    from: string;
    id: string;
    time?: number;
}

const PastTransaction: React.FC<PastTransactionProps> = ({
    amount,
    to,
    from,
    id,
    time,
}) => {
    return (
        <Card
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
            style={{ width: "30%" }}
        >
            <Text fw={500} style={{wordWrap: 'break-word'}}>To: {to}</Text>
            <Text fw={500} style={{wordWrap: 'break-word'}}>From: {from} </Text>
            <br></br>
            <Badge
                color="pink"
                variant="gradient"
                gradient={{
                    from: "pink",
                    to: "grape",
                    deg: 90,
                }}
                size="lg"
            >
                Amount sent: {amount} ROK
            </Badge>
            <br></br>
            <Text size="sm" c="dimmed">
                Sent via ResDB
            </Text>
            <Text size="sm" c="dimmed" style={{wordWrap: 'break-word'}}>
                {id}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                {moment(time).format("MM/DD/YY h:mm A")}
            </Button>
        </Card>
    );
};
