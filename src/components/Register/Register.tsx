import { MailOutlined } from "@ant-design/icons";
import { signUp } from "api/auth";
import axios from "axios";
import Button from "components/FormController/Button/Button";
import Input from "components/FormController/Input/Input";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";


const Register: FunctionComponent = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = handleSubmit((dataForm) => {

        // const { id, email, password, firstname, lastname } = dataForm;
        // const respone = signUp(id, email, password, firstname, lastname);
        // try {
        //     const respone = signUp(id, email, password, firstname, lastname);
        //     console.log('respone', respone.data);
        // } catch (error) {
        //     console.log('error', error);
        // }
    });

    const { theme } = useTheme();

    return (
        <form onSubmit={onSubmit}>
            <Input
                name="firstname"
                control={control}
                rules={{ required: { value: true, message: `Please enter the field firstname.` } }}
                placeholder="firstname"
                type="text"
                theme={theme}
                size="large"
                label="firstname"
                width="100%"
            />
            <Input
                name="lastname"
                control={control}
                rules={{ required: { value: true, message: `Please enter the field lastname.` } }}
                placeholder="lastname"
                type="text"
                theme={theme}
                size="large"
                label="lastname"
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
                size="large"
                label="Password"
                width="100%"
                theme={theme}
            />
            <Button
                text="Register"
                htmlType="submit"
                type="primary"
                iconPosition="right"
                theme={theme}
            // loading={isSuccess}
            />
        </form>
    )
}
export default Register;