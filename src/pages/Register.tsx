import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { AuthFormWrap } from "../components/style";

import earthImage from "../images/earth.png";
import { getErrorMessageContent } from "../utils";

const Register = () => {
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const checkUserNameAndPassword = async (
        username: string,
        password: string
    ) => {
        try {
            await api.auth.initWallet(username, password, "registration");
            navigate("/dashboard");
        } catch (e) {
            const emessage = e instanceof Error ? e.message : e;
            console.log(emessage);
            setErrorMessage(getErrorMessageContent(emessage));
        }
    };
    const handleSubmit = async () => {
        const username = form.getFieldsValue().username;
        const password = form.getFieldsValue().password;
        await checkUserNameAndPassword(username, password);
        console.log("hi", form.getFieldsValue().username);
    };

    const containerStyle = {
        height: "100vh",
        backgroundImage: `url(${earthImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    };

    return (
        <div style={containerStyle}>
            <div
                style={{
                    position: "relative",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Row justify="center">
                    <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
                        <AuthFormWrap>
                            <div className="ninjadash-authentication-top">
                                <h2 className="ninjadash-authentication-top__title">
                                    Register New Wallet
                                </h2>
                            </div>
                            <div className="ninjadash-authentication-content">
                                <Form
                                    name="login"
                                    form={form}
                                    onFinish={handleSubmit}
                                    layout="vertical"
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                message:
                                                    "Please input your username!",
                                                required: true,
                                            },
                                        ]}
                                        label="Username"
                                    >
                                        <Input placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item name="password" label="Password">
                                        <Input.Password placeholder="Password" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            className="btn-register"
                                            htmlType="submit"
                                            type="primary"
                                            size="large"
                                        >
                                            Register
                                        </Button>
                                        <br /> <br />
                                        {errorMessage && (
                                            <p style={{ color: "red" }}>
                                                {errorMessage}. Please Try
                                                Again!
                                            </p>
                                        )}
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="ninjadash-authentication-bottom">
                                <p>
                                    Already have a wallet?
                                    <Link to="/signin">Signin</Link>
                                </p>
                            </div>
                        </AuthFormWrap>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Register;
