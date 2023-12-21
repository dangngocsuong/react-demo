import { FacebookFilled, InstagramOutlined, LoginOutlined, LogoutOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Image, MenuProps } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container, Social } from "styles/common";
import { SiteHeader, MenuTop, HeaderBottom, HeaderTop } from "./styled";
import { useTranslation } from "react-i18next";
import { isUserLoggedIn, removeSessionToken } from "store/sessionManager";

const Header: FunctionComponent = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleChangeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const location = useLocation();
    useEffect(() => {
        setCurrentMenu(location.pathname);
    },[location.pathname]);

    const [currentMenu, setCurrentMenu] = useState(location.pathname);
    const items: MenuProps['items'] = [
        {
            label: (
                <Link to="/">{t('home')}</Link>
            ),
            key: '/',
        },
        {
            label: (
                <Link to="/about">{t('about')}</Link>
            ),
            key: '/about',
        },
        {
            label: (
                <Link to="/blog">{t('blog')}</Link>
            ),
            key: '/blog',
        },
        {
            label: (
                <Link to="/contact">{t('contact')}</Link>
            ),
            key: '/contact',
        },
        {
            label: (
                <Link to="/dashboard">Dashboard</Link>
            ),
            key: '/dashboard',
        },
    ]; 

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        // setCurrentMenu(e.key);
        if (!isUserLoggedIn()) {
			return navigate('/signin');
		}
    };

    const changeLanguage = () => {
        const lng: string = i18n.language === 'vi' ? 'en' : 'vi'
        i18n.changeLanguage(lng);
    }

    const handLogout = () => {
        removeSessionToken();
        navigate('/signin');
    }

    const handSignIn = () => {
        navigate('/signin');
    }

    const handSignUp = () => {
        navigate('/signup');
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
                        {!isUserLoggedIn() && <Button onClick={handSignIn} size={'large'} icon={<LoginOutlined />}>Signin</Button>}
                        {!isUserLoggedIn() && <Button onClick={handSignUp} size={'large'} icon={<LoginOutlined />}>Signup</Button>}
                        {isUserLoggedIn() && <Button onClick={handLogout} size={'large'} icon={<LogoutOutlined />}>Logout</Button>}
                    </Social>
                </HeaderTop>
            </Container>

            <HeaderBottom>
                <Container>
                    <MenuTop onClick={onClick} selectedKeys={[currentMenu]} mode="horizontal" items={items} />
                </Container>
            </HeaderBottom>
        </SiteHeader>
    )
}

export default Header;