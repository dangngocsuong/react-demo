import { Form, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

const DashboardPostCreateForm: React.FunctionComponent<App.PostCreateFormProps> = ({
    open,
    onCreatePost,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Create a new post"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreatePost(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    name="id"
                    label="ID"
                    rules={[{ required: true, message: 'Please input the id of post!' }]}
                >
                    <InputNumber style={{ width: '100%' }}/>
                </Form.Item>
                <Form.Item
                    name="userId"
                    label="User ID"
                    rules={[{ required: true, message: 'Please input the user id of post!' }]}
                >
                    <InputNumber style={{ width: '100%' }}/>
                </Form.Item>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please input the title of post!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="image"
                    label="Image"
                    rules={[{ required: true, message: 'Please input the image of post!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="body"
                    label="Body"
                    rules={[{ required: true, message: 'Please input the body of post!' }]}
                >
                    <TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default DashboardPostCreateForm;