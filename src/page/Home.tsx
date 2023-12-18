import { Container, MainConent } from "styles/common";
import {
    Button,
    Input,
    Space,
    Typography,
} from 'antd';
import { Controller, useController, useForm } from "react-hook-form";
const Home = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<App.FormFieldType>();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });
    const { Text } = Typography;    

    return (
        <MainConent>
            <Container>
                <form onSubmit={onSubmit}>
                    <Space direction="vertical" size={[8, 15]} style={{ display: 'flex' }}>
                        <Space.Compact direction="vertical" block>
                            <Controller
                                control={control}
                                name="email"
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
                                render={({ field }) => (
                                    <Input {...field} placeholder="Email" type="email" />
                                )}
                            />
                            {errors.email && <Text type="danger">{errors.email.message}</Text>}
                        </Space.Compact>

                        <Space.Compact direction="vertical" block>
                            <Controller
                                control={control}
                                name="username"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please enter the field username.",
                                    },
                                }}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Username" />
                                )}
                            />
                            {errors.username && <Text type="danger">{errors.username.message}</Text>}
                        </Space.Compact>

                        <Space.Compact direction="vertical" block>
                            <Controller
                                control={control}
                                name="password"
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
                                render={({ field }) => (
                                    <Input.Password {...field} placeholder="Password" />
                                )}
                            />
                            {errors.password && <Text type="danger">{errors.password.message}</Text>}
                        </Space.Compact>                        

                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Space>
                </form>
            </Container>
        </MainConent>
    )
}
export default Home;