import PageTitle from "../components/PageTitle/PageTitle";
import { Container, MainConent } from "styles/common";
import { useForm } from "react-hook-form";
import Input from "components/FormController/Input/Input";
import { FunctionComponent, MouseEvent, useEffect, useState } from "react";
import { MailFilled, MailOutlined, SendOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useTheme } from "styled-components";
import Button from "components/FormController/Button/Button";

const Contact: FunctionComponent = () => {
    const { control, handleSubmit } = useForm<App.FormFieldType>();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    const {theme} = useTheme();

    const [loadingBtn, setLoadingBtn] = useState(false);
    const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
        setLoadingBtn(true);
        const HTMLButtonElement = event.currentTarget;
        console.log('click button', HTMLButtonElement);
    }

    useEffect(()=>{
        const loadID = setTimeout(() => {
            setLoadingBtn(false);
        }, 2000)

        return () => {
            //console.log(loadID);
            clearTimeout(loadID)
        }

    }, [loadingBtn]);

    return (
        <>
            <PageTitle />
            <MainConent>
                <Container>
                <form onSubmit={onSubmit}>
                    <Input
                        name="username"
                        control={control}
                        rules={{ required: { value: true, message: `Please enter the field username.` } }}
                        placeholder="Username"
                        type="text"
                        suffix={<UserOutlined />}
                        prefix={<UserAddOutlined />}
                        theme={theme}
                        size="large"
                        label="Username"
                        width="100%"
                    />
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
                        prefix={<MailFilled />}
                        theme={theme}
                        size="large"
                        label="Email"
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
                            validate: {
                                value: (val) => {
                                    if (val !== '12345678') {
                                        return 'invail password';
                                    }
                                    return true

                                }
                            }
                        }}
                        suffix={true}
                        prefix={true}
                        theme={theme}
                        size="large"
                        label="Password"
                        width="100%"
                    />
                    <Button
                        text="Login"
                        htmlType="submit"
                        type="primary"
                        icon={<SendOutlined />}
                        iconPosition="right"
                        onClick={handleButton}
                        loading={loadingBtn}
                        theme={theme}
                    />
                </form>
                </Container>
            </MainConent >
        </>
    )
}
export default Contact;