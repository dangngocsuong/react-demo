import { ContentLatestPost, Copyright, CopyrightText, FooterAside, FooterAsideInfo, FooterWidgetWrap, FormSubscribe, HeadingFooter, LatestPotsItem, SiteFooter, TextFooter } 
from "components/Footer/styled";
import imgPost01 from "assets/images/png-post-01.png";
import imgPost02 from "assets/images/png-post-02.png";
import imgPost03 from "assets/images/png-post-03.png";
import { Container, ContentText, Social } from "styles/common";
import { FacebookFilled, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Button, FloatButton, Image, Input, Space } from "antd";
import { Figure } from "styles/blog";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<App.FormFieldType>();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <>
            <SiteFooter>
                <Container>
                    <FooterWidgetWrap>
                        <FooterAsideInfo>
                            <Link to="/">
                                <Image
                                    width={160}
                                    src="https://via.placeholder.com/160x70/cccccc/ffffff?text=LOGO"
                                    preview={{ visible: false }}
                                />
                            </Link>
                            <ContentText className="info-desc">Lommodo ligula eget dolor. Aenean massa.Cum sociis que penatibus et magnis dis parturient
                                montes
                                lorem, nascetur ridiculusmus. Donec quam felis, ultricies nec massa.Cum sociis ...</ContentText>
                            <FormSubscribe onSubmit={onSubmit}>
                                <Space.Compact>
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
                                                message: "Please enter the field.",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <Input {...field} placeholder="Email" type="email" />
                                        )}
                                    />
                                    <Button type="primary" htmlType="submit">SUBSCRIBE</Button>
                                </Space.Compact>
                                {errors.email && <p className="alert">{errors.email.message}</p>}
                            </FormSubscribe>

                            <Social className="social-footer">
                                <Link to="#"><FacebookFilled /></Link>
                                <Link to="#"><TwitterOutlined /></Link>
                                <Link to="#"><InstagramOutlined /></Link>
                            </Social>
                        </FooterAsideInfo>
                        <FooterAside>
                            <HeadingFooter level={3}>Latest Posts</HeadingFooter>
                                <LatestPotsItem>
                                    <Figure>
                                        <Link to="#"><Image src={imgPost01} /></Link>
                                    </Figure>
                                    <ContentLatestPost>
                                        <TextFooter>
                                            <Link to="#">5 Skin Care Rituals You Should Be Doing Before Bed</Link>
                                        </TextFooter>
                                        <ContentText>August 11, 2018</ContentText>
                                    </ContentLatestPost>
                                </LatestPotsItem>
                                <LatestPotsItem>
                                    <Figure>
                                        <Link to="#"><Image src={imgPost02} /></Link>
                                    </Figure>
                                    <ContentLatestPost>
                                        <TextFooter>
                                            <Link to="#">Fashion Outfit Ideas to Try From Instagram This Week</Link>
                                        </TextFooter>
                                        <ContentText>August 11, 2018</ContentText>
                                    </ContentLatestPost>
                                </LatestPotsItem>
                                <LatestPotsItem>
                                    <Figure>
                                        <Link to="#"><Image src={imgPost03} /></Link>
                                    </Figure>
                                    <ContentLatestPost>
                                        <TextFooter>
                                            <Link to="#">7 Soaps to Supercharge Your Daily Skincare Routine</Link>
                                        </TextFooter>
                                        <ContentText>August 11, 2018</ContentText>
                                    </ContentLatestPost>
                                </LatestPotsItem>
                        </FooterAside>
                        <FooterAside className="widget widget-categories">
                            <HeadingFooter level={3}>Categories</HeadingFooter>
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
                        </FooterAside>
                    </FooterWidgetWrap>
                </Container>
                <Copyright>
                    <Container>
                        <CopyrightText>
                            Copyright © 2023
                        </CopyrightText>
                    </Container>
                </Copyright>
            </SiteFooter>
            <FloatButton.BackTop />
        </>
    )
}

export default Footer;