import { LoginOutlined, LogoutOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
import Button from "components/FormController/Button/Button";
import Input from "components/FormController/Input/Input";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";

const Login: FunctionComponent = () => {
    const { theme } = useTheme();
    const { control, handleSubmit } = useForm<App.FormFieldType>();
    const [login, setLogin ] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (_, status, name) => {
        if(status === "success") {
            api.success({
                message: name,
            });
        } else if(status === 'warning') {
            api.warning({
                message: name,
            });
        } else if(status === 'info') {
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

    console.log(data.data);

    const onSubmit = handleSubmit((dataform) => {
        const checkLogin = data.data.find((user: App.User) => user.username === dataform.username && user.password === dataform.password);
        if(login){
            openNotification('topRight', 'info', 'Logged');
            console.log("Logged"); 
        } else if (!login && checkLogin !== undefined && checkLogin.id > 0) {
            setLogin(true);    
            openNotification('topRight', 'success', 'Login is success');         
        } else if(checkLogin === undefined) {
            openNotification('topRight', 'warning', 'invail username or password');
        }
        console.log(checkLogin);
    });    

    return (
        <>
            {contextHolder}
            <form onSubmit={onSubmit}>
                <Input
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
                        // validate: {
                        //     value: (val) => {
                        //         if (val !== '12345678') {
                        //             return 'invail password';
                        //         }
                        //         return true
                        //     }
                        // }
                    }}
                    suffix={true}
                    theme={theme}
                    size="large"
                    label="Password"
                    width="100%"
                />
                <Button
                    text={login ? "Logout" : "Login"}
                    htmlType="submit"
                    type="primary"
                    icon={login ? <LogoutOutlined /> : <LoginOutlined />}
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