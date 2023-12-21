import { LoginOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
import Button from "components/FormController/Button/Button";
import Input from "components/FormController/Input/Input";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { getToken, isUserLoggedIn, saveToken } from "store/sessionManager";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
    const { theme } = useTheme();
    const { control, handleSubmit } = useForm<App.FormFieldType>();
    //const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (_, status, name) => {
        if (status === "success") {
            api.success({
                message: name,
            });
        } else if (status === 'warning') {
            api.warning({
                message: name,
            });
        } else if (status === 'info') {
            api.info({
                message: name,
            });
        }
    };

    const { isPending, error, data } = useQuery({
        queryKey: ['login'],
        queryFn: async () => await axios.get('http://localhost:3000/users/')
    });

    if (isPending) return <p>loading...</p>
    if (error) return <p>{`An error has occurred: ${error.message}`}</p>

    //console.log(data.data);    

    const onSubmit = handleSubmit((dataform) => {
        const { username, email, password } = dataform;
        const checkLogin = data.data.find((user: App.FormFieldType) => user.email === email && user.password === password);
        if (!isUserLoggedIn() && checkLogin !== undefined && checkLogin.id > 0) {
            saveToken(JSON.stringify(checkLogin));
            openNotification('topRight', 'success', 'Login is success');
            navigate('/');
        } else if (checkLogin === undefined) {
            openNotification('topRight', 'warning', 'invail username or password');
        }
        // try {
        //     const response = axios.post('https://jsonplaceholder.typicode.com/users', {
        //         username,
        //         password,
        //     });

        //     console.log(response);
        // } catch (error) {
        //     console.error('Login failed:', error.message);
        //     throw error;
        // }
    });

    return (
        <>
            {contextHolder}
            <form onSubmit={onSubmit}>
                {/* <Input
                    name="username"
                    control={control}
                    rules={{ required: { value: true, message: `Please enter the field username.` } }}
                    placeholder="Username"
                    type="text"
                    suffix={<UserOutlined />}
                    theme={theme}
                    size="large"
                    label="Username"
                    width="100%"
                /> */}
                <Input
                    name="email"
                    control={control}
                    rules={{
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Not another email.",
                        },
                        required: {
                            value: true,
                            message: "Please enter the field email.",
                        },
                    }}
                    placeholder="Email"
                    type="email"
                    suffix={<MailOutlined />}
                    size="large"
                    label="Email"
                    width="100%"
                    theme={theme}
                />
                <Input
                    name="password"
                    control={control}
                    placeholder="Password"
                    type="password"
                    rules={{
                        required: {
                            value: true,
                            message: "Please enter the field password.",
                        },
                        minLength: {
                            value: 8,
                            message: 'Min length 8 character'
                        },
                    }}
                    suffix={true}
                    theme={theme}
                    size="large"
                    label="Password"
                    width="100%"
                />
                <Button
                    text="Login"
                    htmlType="submit"
                    type="primary"
                    icon={<LoginOutlined />}
                    iconPosition="right"
                    // onClick={handleButton}
                    // loading={isSuccess}
                    theme={theme}
                />
            </form>
        </>
    )
}
export default Login;