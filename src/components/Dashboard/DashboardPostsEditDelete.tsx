import { Form, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";

const DashboardPostsEditDelete: React.FunctionComponent<App.EditableCellProps> = (
    {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }

) => {
    const inputNode = inputType === 'number' ? <InputNumber disabled={true}/> : <TextArea />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    )
}
export default DashboardPostsEditDelete;