import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";
import theme from "styles/theme";
const { Text } = Typography;

export const SiteFooter = styled.footer`
    background-color: ${theme.colors.mineshaft};
    color: ${theme.colors.boulder};

    .footer-widget {
        padding: 80px 0;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 100px;

        @media screen and (max-width: 767px) {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }

    .widget ul li a {
        padding-left: 0;
    }

    .copyright {
        background-color: ${theme.colors.codgray};
        padding: 31px 0;

        &__text {
            display: flex;
            justify-content: center;
        }
    }
    
    .widget-categories {
        li a {
            color: ${theme.colors.white};

            &:hover {
                color: ${theme.colors.milanored};
            }
        }
    }
`
export const FormSubscribe = styled.form`
    margin-bottom: 32px;
    position: relative;

    input[type="email"] {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.5;
        color: ${theme.colors.white};
        min-width: 0;
        background: 0 0;
        border: 1px solid rgba(137, 137, 138, .3);
        border-right: none;
        margin-bottom: 0;
        padding: 0 15px;
        border-radius: 0;
    }

    input[type="email"]:focus {
        border-color: ${theme.colors.milanored};
    }

    input[type="email"]::placeholder {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.5;
        color: ${theme.colors.white};
    }

    button {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        color: ${theme.colors.white};
        text-transform: uppercase;
        background: ${theme.colors.monza};
        height: 43px;
        padding: 0 15px;
        transition: all .2s;
        border-radius: 0;
        border: none;
        width: auto;
        margin-top: 0;
        cursor: pointer;
    }

    button:hover,
    .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
        background: ${theme.colors.milanored};
        color: ${theme.colors.white};
    }
`

export const FooterWidgetWrap = styled.div`
    padding: 80px 0;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 100px;
`

export const FooterAside = styled.aside`
    display: flex;
    flex-direction: column;
`

export const FooterAsideInfo = styled.aside`
    align-items: center;
    text-align: center;
`

export const HeadingFooter = styled(Title)`
    &.ant-typography {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.colors.white};
        text-transform: uppercase;
        margin-bottom: 20px;
    }
`

export const TextFooter = styled(Text)`
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.white};
    text-transform: unset;
    word-break: break-word;
    margin-top: 0;
    margin-bottom: 5px;

    a {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: ${theme.colors.white};

        &:hover {
            color: #b30710;
        }
    }
`

export const ContentLatestPost = styled.div`
    max-width: calc(100% - 100px - 25px);
`

export const LatestPotsItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 35px;
`

export const Copyright = styled.div`
    background-color: #111;
    padding: 31px 0;
`

export const CopyrightText = styled.div`
    display: flex;
    justify-content: center;
`