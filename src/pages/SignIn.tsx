import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { AuthFormWrap } from "../components/style";
import { Checkbox } from "../components/checkbox/checkbox";

import earthImage from "../images/earth.png";

const SignIn = () => {
    console.log(earthImage);
    const [form] = Form.useForm();
    const [loginWrong, setLoginWrong] = useState(false);
    const [userNotFound, setUserNotFound] = useState(false);

    // this is the imaginary backend function where you pass in the Json username and password, and get back a JSON response of either a public key for a successful login/registration
    // or an error message for unsuccessful login
    // right now this is done through simple if statements to simulate errors but obviosuly we will change this so it comes from the backend
    const checkUserNameAndPassword = (username: string, password: string) => {
        if (username === "ninjadash@dm.com" && password === "123456") {
            setLoginWrong(false);
            setUserNotFound(false);
            // get a response of a public key here
            return { publicKey: "123", privateKey: "456" };
        }
        if (username === "ninjadash@dm.com" && password !== "123456") {
            setLoginWrong(true);
            setUserNotFound(false);
            return { err: "wrongUserName" };
        }
        if (username !== "ninjadash@dm.com") {
            setUserNotFound(true);
            setLoginWrong(false);
            return { err: "userNotFound" };
        }
    };
    const handleSubmit = () => {
        const username = form.getFieldsValue().email;
        const password = form.getFieldsValue().password;
        checkUserNameAndPassword(username, password);
        console.log("hi", form.getFieldsValue().email);
    };

    const containerStyle = {
        height: "100vh",
        // backgroundImage: `url("${require('../images/earth.png')}")`,
        backgroundImage: `url(${earthImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    };

    return (
        <div style={containerStyle}>
            <div style={{ paddingTop: "15vh" }}>
                <Row justify="center">
                    <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
                        {/* <img src="earth.png" alt="My Image" /> */}

                        <AuthFormWrap>
                            <div className="ninjadash-authentication-top">
                                <h2 className="ninjadash-authentication-top__title">
                                    Sign in ResDB
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
                                        name="email"
                                        rules={[
                                            {
                                                message:
                                                    "Please input your username or Email!",
                                                required: true,
                                            },
                                        ]}
                                        initialValue="ninjadash@dm.com"
                                        label="Username or Email Address"
                                    >
                                        <Input placeholder="name@example.com" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        initialValue="123456"
                                        label="Password"
                                    >
                                        <Input.Password placeholder="Password" />
                                    </Form.Item>
                                    <div className="ninjadash-auth-extra-links">
                                        <NavLink
                                            className="forgot-pass-link"
                                            to="/forgotPassword"
                                        >
                                            Forgot password?
                                        </NavLink>
                                    </div>
                                    <Form.Item>
                                        <Button
                                            className="btn-signin"
                                            htmlType="submit"
                                            type="primary"
                                            size="large"
                                        >
                                            Sign in
                                        </Button>
                                        <br /> <br />
                                        {loginWrong && (
                                            <p style={{ color: "red" }}>
                                                Wrong username or password.
                                                Please try again.
                                            </p>
                                        )}
                                        {userNotFound && (
                                            <p style={{ color: "red" }}>
                                                User not found. Please try
                                                again.
                                            </p>
                                        )}
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="ninjadash-authentication-bottom">
                                <p>
                                    Don&apos;t have a wallet? No problem, click
                                    here to create one!
                                    <Link to="/register">Register</Link>
                                </p>
                            </div>
                        </AuthFormWrap>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SignIn;
