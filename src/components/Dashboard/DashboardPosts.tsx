import { Space, Table, Typography, Form, Popconfirm, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardPostEditDelete from "./DashboardPostsEditDelete";
import DashboardPostCreateForm from "./DashboardPostCreateForm";
import { useMutation, useQuery } from "@tanstack/react-query";

const DashboardPosts = () => {
    const [posts, setPosts] = useState<App.Item[]>([]);
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState<string | number>('');
    const [open, setOpen] = useState(false);
    const {isPending, error, isSuccess, data}  = useQuery({
        queryKey: ['getAllPost'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/posts");
            return data;
        }
    });     

    useEffect(() => {
        setPosts(data);
    }, [data]);

    
    const isEditing = (record: App.Item) => record.id === editingKey;
    const edit = (record: Partial<App.Item> & { id: React.Key }) => {
        form.setFieldsValue({ idpost: '', title: '', body: '', image: '', userId: '', ...record });
        setEditingKey(record.id);
    };
    const editPost = useMutation({
        mutationFn: (row: App.Item) => {            
            return axios.put(`http://localhost:3000/posts/${row.id}`, row);
        },
        onSuccess: (_, variables) => {
            const newData = [...posts];
            const index = newData.findIndex((item) => variables.id === item.id);
            const item = newData[index];
            if (index > -1) {
                newData.splice(index, 1, {...item, ...variables});
                setPosts(newData);
                setEditingKey('');
            } else {
                newData.push(variables);
                setPosts(newData);
                setEditingKey('');
            }
        }
    });
    const save = async (id: string | number) => {
        try {
            const row = (await form.validateFields()) as App.Item;
            editPost.mutate(row);
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const cancel = () => {
        setEditingKey('');
    };     
    const deletePost = useMutation({
        mutationFn: (id: string | number) => {            
            return axios.delete(`http://localhost:3000/posts/${id}`);
        },
        onSuccess: (_, variables) => {
            let newpost = posts.filter((item) => item.id !== variables);
            setPosts(newpost)
        }
    });    


    const createPost = useMutation({
        mutationFn: (values: App.Item) => {
            return axios.post('http://localhost:3000/posts/', values)
        },
        onSuccess: (_, variables) => {
            setPosts([...posts, variables]);
            setOpen(false); 
        }
    })
    const onCreatePost = (values: App.Item) => {
        createPost.mutate(values);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
            editable: true,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            width: '20%',
            editable: true,
        },
        {
            title: 'Body',
            dataIndex: 'body',
            width: '30%',
            editable: true,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '20%',
            editable: true,
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            width: '10%',
            editable: true,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_: any, record: App.Item) => {
                const editable = isEditing(record);

                return (
                    <Space size="middle">
                        {
                            editable ? (
                                <span>
                                    <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
                                        Save
                                    </Typography.Link>
                                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                                    Edit
                                </Typography.Link>
                            )
                        }
                        {
                            posts.length >= 1 ? (
                                <Popconfirm title="Sure to delete?" onConfirm={() => deletePost.mutate(record.id)}>
                                    <a>Delete</a>
                                </Popconfirm>
                            ) : null
                        }
                    </Space>
                )
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: App.Item) => ({
                record,
                inputType: col.dataIndex === 'id' || col.dataIndex === 'userId' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    if (isPending) return <p>Loading...</p>
    if (error) return <p>{`An error has occurred: ${error.message}`}</p> 

    return (
        <>
            <div>
                <Button type="primary" onClick={() => { setOpen(true); }} > New Post </Button>
                <DashboardPostCreateForm
                    open={open}
                    onCreatePost={onCreatePost}
                    onCancel={() => { setOpen(false); }}
                />
            </div>
            <Form form={form} component={false}>
                <Table
                    rowKey={'id'}
                    components={{
                        body: {
                            cell: DashboardPostEditDelete,
                        },
                    }}
                    bordered
                    dataSource={posts}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </>
    )
}
export default DashboardPosts;