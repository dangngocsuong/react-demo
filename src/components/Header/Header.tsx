import { FacebookFilled, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Image, MenuProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container, Social } from "styles/common";
import { SiteHeader, MenuTop, HeaderBottom, HeaderTop } from "./styled";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const handleChangeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const [current, setCurrent] = useState('home');
    const items: MenuProps['items'] = [
        {
            label: (
                <Link to="/">{t('home')}</Link>
            ),
            key: 'home',
        },
        {
            label: (
                <Link to="/about">{t('about')}</Link>
            ),
            key: 'about',
        },
        {
            label: (
                <Link to="/blog">{t('blog')}</Link>
            ),
            key: 'blog',
        },
        {
            label: (
                <Link to="/contact">{t('contact')}</Link>
            ),
            key: 'contact',
        },
        {
            label: (
                <Link to="/dashboard">Dashboard</Link>
            ),
            key: 'dashboard',
        },
    ];
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const changeLanguage = () => {
        const lng: string = i18n.language === 'vi' ? 'en' : 'vi'
        i18n.changeLanguage(lng);
    }

    return (
        <SiteHeader>
            <Container>
                <HeaderTop>
                    <Link to="/">
                        <Image
                            width={160}
                            src="https://via.placeholder.com/160x70/cccccc/ffffff?text=LOGO"
                            preview={{ visible: false }}
                        />
                    </Link>

                    <Social>
                        <Link to="#"><FacebookFilled /></Link>
                        <Link to="#"><TwitterOutlined /></Link>
                        <Link to="#"><InstagramOutlined /></Link>
                        <Button onClick={handleChangeMode} size={'large'}>{theme === 'light' ? 'Dark' : 'Light'}</Button>
                        <Button onClick={changeLanguage} size={'large'}>{i18n.language === 'vi' ? 'EN' : 'VI'}</Button>
                    </Social>
                </HeaderTop>
            </Container>

            <HeaderBottom>
                <Container>
                    <MenuTop onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Container>
            </HeaderBottom>
        </SiteHeader>
    )
}

export default Header;