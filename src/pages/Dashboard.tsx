import { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Group, Text, Badge, Button, Input, CloseButton, Container, Box, Burger, Anchor } from "@mantine/core";
import "@mantine/core/styles.css";
import { Navbar } from "../components/Navbar";
import { PastTransactions } from "../components/PastTransactions";
import { RoksDisplay } from "../components/RoksDisplay";
import SendTransaction from "../components/SendTransaction";
import {Signout} from "../components/Signout";
import "../styles/styles.css";

function Dashboard() {
    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
       
    };

    const [publicKey, setPublicKey] = useState("");
    const [amount, setAmount] = useState("");
    const [metaData, setMetadata] = useState("");

    return (
        <>
          <div style={containerStyle}>
            <Signout />
            <div className="ninjadash-page-header-main" title="Past transactions" style={{ marginTop: "2%" }} />
        <div style={{ marginTop: "5vh", marginLeft: "12%", marginRight: "2%", display: 'flex', flexDirection: 'column', justifyContent: 'space-around'  }}>
            <div>
                <h1 className="headerTitle"> Your past transactions </h1>
                <PastTransactions />
            </div>
            <br></br>
            <div>
                <Row gutter={25}>
                    <Col sm={24} xs={24}>
                        <br></br>
                        <div className="flexContainer">
                        <div style={{ display: "flex", flexDirection: "column" }} >
                            <SendTransaction />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }} >
                                <h1 className="headerTitle"> View keys </h1>
                                <RoksDisplay />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </div>
    </div>
     </>
    );
}

export default Dashboard;
