import axios from "axios";
import { ArticleReadMoreLink, ArticleTitle, Figure , Articles, ArticleContentInfo, ArticleContentInfoItem, ArticleDate, ArticleDateNumber } from "styles/blog";
import { Image, Space, Tag } from "antd";
import { RotateLeftOutlined, RotateRightOutlined, SwapOutlined, TagsFilled, UserOutlined, WechatOutlined, ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Paragraph from "antd/es/typography/Paragraph";
import { ContentText } from "styles/common";

const Article = ({ post }: { post: App.Posts }) => {

    const ElementUserInfo = () => {
        const { isPending, error, data } = useQuery({
            queryKey: ['getUsers', post.userId], 
            queryFn: async () => await axios.get(`http://localhost:3000/users/${post.userId}`)
        })
        if (isPending) return <p>Loading...</p>
        if (error) return <p>{`An error has occurred: ${error.message}`}</p>
        return (
            <ArticleContentInfoItem>
                <UserOutlined /> By <Link to="#">{data?.data.name}</Link>
            </ArticleContentInfoItem>
        )
    }

    const tagsData = ['Academics', 'Design'];

    return (
        <Articles className="article">
            <Figure className="article-figure">
                <Image
                    src={post.image}
                    preview={{
                        toolbarRender: (
                            _,
                            {
                                transform: { scale },
                                actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                            },
                        ) => (
                            <Space size={12} className="toolbar-wrapper">
                                <SwapOutlined rotate={90} onClick={onFlipY} />
                                <SwapOutlined onClick={onFlipX} />
                                <RotateLeftOutlined onClick={onRotateLeft} />
                                <RotateRightOutlined onClick={onRotateRight} />
                                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                            </Space>
                        ),
                    }}
                />
                <ArticleDate>
                    <ArticleDateNumber>08</ArticleDateNumber> AUG, 2018
                </ArticleDate>
            </Figure>
            <ArticleTitle level={2}><Link to="#">{post.title}</Link></ArticleTitle>
            <ArticleContentInfo>
                <ElementUserInfo />
                <ArticleContentInfoItem>
                <TagsFilled /> <Space size={[0, 5]} wrap>{ tagsData.map((tag) => <Tag key={tag} bordered={false}>{tag}</Tag>) }</Space>
                </ArticleContentInfoItem>
                <ArticleContentInfoItem>
                    <WechatOutlined /> (0) Comment
                </ArticleContentInfoItem>
            </ArticleContentInfo>
            <Paragraph>
                <ContentText>{post.body}</ContentText>
            </Paragraph>
            <ArticleReadMoreLink to="#">Read more</ArticleReadMoreLink>
        </Articles>
    )
}
export default Article;