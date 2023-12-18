import { useState } from "react";
import PageTitle from "components/PageTitle/PageTitle";
import axios from "axios";
import Article from "components/Blog/Article";
import { CustomCheckableTag, HeadingSidebar, StyleSidebar } from "styles/sidebar";
import { Container, Main, MainConent, Paginations } from "styles/common";
import { Space, type PaginationProps, Input, Button, Typography } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { useController, useForm } from "react-hook-form";

const Blog = () => {
    const [current, setCurrent] = useState(3);
    const { Text } = Typography;

    const onChangePaginations: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const RenderArticleItem = () => {
        const { isPending, error, data } = useQuery({
            queryKey: ['getPost'],
            queryFn: async () => await axios.get('http://localhost:3000/posts')
        })

        if (isPending) return <p>Loading...</p>
        if (error) return <p>{`An error has occurred: ${error.message}`}</p>

        return data?.data.map((post: App.Posts) => {
            return (
                <Article key={post.id} post={post} />
            )
        })

    }

    const tagsData = ['Film oline', 'Creative', 'Design', 'Landing', 'Skill'];
    const [selectedTags, setSelectedTags] = useState<string[]>(['Creative']);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };


    const { control, handleSubmit } = useForm<App.FormFieldType>();
    const {
        field,
        formState: { errors }
      } = useController({
        name: 'search',
        control,
        rules: { required: {value: true, message: 'Please enter the field search.'} }
    });
    
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <>
            <PageTitle />
            <Container>
                <MainConent className="blog">
                    <Main>
                        <RenderArticleItem />
                        <Paginations current={current} onChange={onChangePaginations} total={50} />
                    </Main>

                    <StyleSidebar>
                        <div className="sidebar">
                            <aside className="widget widget-search">
                                <form onSubmit={onSubmit}> 
                                    <Space.Compact>                               
                                        <Input 
                                            placeholder="Search..."
                                            onChange={field.onChange}
                                            onBlur={field.onBlur} 
                                            value={field.value}
                                            />
                                        <Button type="primary" htmlType="submit"><SearchOutlined /></Button>
                                    </Space.Compact>
                                    
                                    {errors.search && <Text type="danger">{errors.search.message}</Text>}
                                </form>
                            </aside>
                            <aside className="widget widget-categories">
                                <HeadingSidebar level={3}>Categories</HeadingSidebar>
                                <ul>
                                    <li><a href="#">Fragrances</a></li>
                                    <li><a href="#">Hair Care</a></li>
                                    <li><a href="#">Make Up</a></li>
                                    <li><a href="#">Outfits</a></li>
                                    <li><a href="#">Skin Care</a></li>
                                    <li><a href="#">Style</a></li>
                                    <li><a href="#">Fashion</a></li>
                                    <li><a href="#">Lifestyle</a></li>
                                    <li><a href="#">Wellness</a></li>
                                </ul>
                            </aside>
                            <aside className="widget widget-tag-cloud">
                                <HeadingSidebar level={3}>Tags Cloud</HeadingSidebar>
                                <Space size={[0, 7]} wrap>
                                    {tagsData.map((tag) => <CustomCheckableTag
                                        key={tag}
                                        checked={selectedTags.includes(tag)}
                                        onChange={(checked) => handleChange(tag, checked)}
                                    >{tag}</CustomCheckableTag>)}
                                </Space>
                            </aside>
                        </div>
                    </StyleSidebar>
                </MainConent>
            </Container>
        </>
    )
}

export default Blog;