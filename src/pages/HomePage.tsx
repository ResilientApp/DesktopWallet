import React, { useState } from "react";
import { Container, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="md">
            <Stack gap={3} justifyContent="center">
                <Typography variant="h5">
                    Resilleint DB Desktop Wallet
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => {
                        api.demo.print("hi");
                    }}
                >
                    Print("hi")
                </Button>
                <Button onClick={() => navigate("/signin")}>sign in</Button>
                <Button onClick={() => navigate("/register")}>register</Button>
            </Stack>
        </Container>
    );
};

export default HomePage;
