import React, { useState } from "react";
import { Container, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
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
            </Stack>
        </Container>
    );
};

export default HomePage;
