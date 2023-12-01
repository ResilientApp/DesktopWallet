import { useState } from "react";
import { Row, Col } from "antd";
import resdb from "../images/resdb.png";
import background from "../images/background.jpg";
import wallet from "../images/wallet.jpeg"
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

function BlankPage() {
    const containerStyle = {
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    };
    const [publicKey, setPublicKey] = useState("");
    const [amount, setAmount] = useState("");
    const [metaData, setMetadata] = useState("");

    return (
        <>
            <div style={containerStyle}>
                <nav
                    className="navbar navbar-light"
                    style={{ backgroundColor: "#FCF5F3" }}
                >
                    <div className="container-fluid">
                        <img
                            src={resdb}
                            alt="resdb_logo"
                            style={{ marginLeft: "2%", borderRadius: "5px" }}
                            width="175"
                            height="60"
                        />
                        <form className="d-flex" style={{ marginRight: "2%" }}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>

                <div
                    className="ninjadash-page-header-main"
                    title="Past transactions"
                    style={{ marginTop: "2%" }}
                />
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                    <h1
                        // c="white"
                        style={{
                            fontSize: "22px",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "gray",
                            borderRadius: "30px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            display: "inline-block",
                        }}
                    >
                        Your past transactions
                    </h1>
                    <br></br>
                    <Row gutter={25}>
                        <Col sm={24} xs={24}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "30px",
                                    flexWrap: "wrap",
                                    // justifyContent: "center",
                                }}
                            >
                                <Card
                                    shadow="sm"
                                    padding="xl"
                                    radius="md"
                                    withBorder
                                    style={{ width: "30%" }}
                                >
                                    <Text fw={500}>To: User 123</Text>
                                    <Text fw={500}>From: User 567</Text>
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
                                        Amount sent: 2047 ROK
                                    </Badge>
                                    <br></br>
                                    <Text size="sm" c="dimmed">
                                        Sent via ResDB
                                    </Text>

                                    <Button
                                        variant="light"
                                        color="blue"
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                    >
                                        11/12/23
                                    </Button>
                                </Card>
                                <Card
                                    shadow="sm"
                                    padding="xl"
                                    radius="md"
                                    withBorder
                                    style={{ width: "30%" }}
                                >
                                    <Text fw={500}>To: User 123</Text>
                                    <Text fw={500}>From: User 567</Text>
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
                                        Amount sent: 2047 ROK
                                    </Badge>
                                    <br></br>
                                    <Text size="sm" c="dimmed">
                                        Sent via ResDB
                                    </Text>

                                    <Button
                                        variant="light"
                                        color="blue"
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                    >
                                        11/12/23
                                    </Button>
                                </Card>
                                <Card
                                    shadow="sm"
                                    padding="xl"
                                    radius="md"
                                    withBorder
                                    style={{ width: "30%" }}
                                >
                                    <Text fw={500}>To: User 123</Text>
                                    <Text fw={500}>From: User 567</Text>
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
                                        Amount sent: 2047 ROK
                                    </Badge>
                                    <br></br>
                                    <Text size="sm" c="dimmed">
                                        Sent via ResDB
                                    </Text>

                                    <Button
                                        variant="light"
                                        color="blue"
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                    >
                                        11/12/23
                                    </Button>
                                </Card>
                            </div>
                            <br></br>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "30px",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    marginRight: "3%",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h1
                                        style={{
                                            fontSize: "22px",
                                            color: "white",
                                            fontWeight: "bold",
                                            backgroundColor: "gray",
                                            borderRadius: "30px",
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            paddingLeft: "20px",
                                            paddingRight: "20px",
                                            display: "inline-block",
                                            textAlign: "center"
                                        }}
                                    >
                                        Send a transaction
                                    </h1>
                                    <br></br>
                                    <Card
                                        shadow="sm"
                                        padding="xl"
                                        radius="md"
                                        withBorder
                                        style={{ width: "40vw" }}
                                    >
                                        <Input.Label required>
                                            Enter recipient's public key
                                        </Input.Label>
                                        <Input
                                            placeholder="Recipient public key"
                                            value={publicKey}
                                            onChange={(event: any) =>
                                                setPublicKey(
                                                    event.currentTarget.value
                                                )
                                            }
                                            rightSectionPointerEvents="all"
                                            rightSection={
                                                <CloseButton
                                                    aria-label="Clear input"
                                                    onClick={() =>
                                                        setPublicKey("")
                                                    }
                                                    style={{
                                                        display: publicKey
                                                            ? undefined
                                                            : "none",
                                                    }}
                                                />
                                            }
                                            color="green"
                                        />
                                        <br></br>
                                        <Input.Label required>
                                            Enter amount you wish to send
                                        </Input.Label>
                                        <Input
                                            placeholder="Enter amount"
                                            value={amount}
                                            onChange={(event) =>
                                                setAmount(
                                                    event.currentTarget.value
                                                )
                                            }
                                            rightSectionPointerEvents="all"
                                            rightSection={
                                                <CloseButton
                                                    aria-label="Clear input"
                                                    onClick={() =>
                                                        setAmount("")
                                                    }
                                                    style={{
                                                        display: amount
                                                            ? undefined
                                                            : "none",
                                                    }}
                                                />
                                            }
                                        />{" "}
                                        <br></br>
                                        <Input.Label>
                                            Metadata (optional)
                                        </Input.Label>
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
                                                <CloseButton
                                                    aria-label="Clear input"
                                                    onClick={() =>
                                                        setMetadata("")
                                                    }
                                                    style={{
                                                        display: metaData
                                                            ? undefined
                                                            : "none",
                                                    }}
                                                />
                                            }
                                        />{" "}
                                        <Button
                                            variant="gradient"
                                            color="blue"
                                            fullWidth
                                            mt="md"
                                            radius="md"
                                            gradient={{
                                                from: "cyan",
                                                to: "green",
                                                deg: 247,
                                            }}
                                        >
                                            Send
                                        </Button>
                                    </Card>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h1
                                        style={{
                                            fontSize: "22px",
                                            color: "white",
                                            fontWeight: "bold",
                                            backgroundColor: "gray",
                                            borderRadius: "30px",
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            paddingLeft: "20px",
                                            paddingRight: "20px",
                                            display: "inline-block",
                                            textAlign: "center",
                                        }}
                                    >
                                        View Wallet
                                    </h1>
                                    <br></br>
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
                                        <Badge
                                            color="pink"
                                            variant="light"
                                            mt="md"
                                            size="lg"
                                        >
                                            Amount of coins left
                                        </Badge>
                                        <Text fw={500} mt = "md">500 ROK left</Text>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default BlankPage;
