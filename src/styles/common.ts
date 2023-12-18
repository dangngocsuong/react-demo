import styled from "styled-components";
import theme from "./theme";
import { Menu, Pagination, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
const { Text } = Typography;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`
export const ContainerFluid = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`

export const MainConent = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    margin-left: auto;
    margin-right: auto;

    &.blog {
        display: flex;
        justify-content: space-between;
        gap: 60px;
    }
`
export const Main = styled.main`
    position: relative;
`

export const Social = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    a {
        width: 40px;
        height: 40px;
        border: 1px solid ${theme.colors.dovegray};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.dovegray};

        &:hover {
            color: ${theme.colors.white};
            border-color: ${theme.colors.monza};
            background-color: ${theme.colors.monza};
        }
    }

    &.social-footer {
        justify-content: center;
    }
`
export const Paginations = styled(Pagination)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const StylePagination = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    a,
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.5;
        color: #111;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 39px;
        height: 39px;
        border-radius: 50%;
        border: 1px solid #e1e1e1;
        margin: 5px;
        transition: all .2s;
    }

    a:hover,
    span {
        color: ${theme.colors.white};
        background-color: ${theme.colors.monza};
        border-color: ${theme.colors.monza};
    }

    .next,
    .prev {
        width: auto;
        height: auto;
        border: none;
        font-weight: 500;
        font-size: 14px;

        &:hover {
            color: ${theme.colors.monza};
            background-color: transparent;
        }

        i {
            font-size: 25px;
            margin-left: 10px;
        }
    }

    .prev i {
        font-size: 25px;
        transform: rotate(180deg);
        margin-right: 10px;
    }

    .next:hover i {
        animation-name: left-to-right;
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    .prev:hover i {
        animation-name: right-to-left;
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }
`

export const ContentText = styled(Paragraph)`
    color: ${theme.colors.dovegray};
    font-size: 16px;
    line-height: 1.75;
    font-family: 'Poppins';

    &.info-desc {
        margin-top: 20px;
    }
`

export const MenuList = styled(Menu)`
    font-family: 'Poppins';
    font-size: 16px;
    line-height: 1.75;
    font-weight: 300;
    color: ${theme.colors.dovegray};

    &.ant-menu-inline .ant-menu-item {
        padding: 0;
        margin: 10px 0 0 0;
        line-height: 1.5;
        height: auto;

        a {
            position: relative;
        }
    }

    &.sidebar-categories {
        a {
            padding-left: 20px;
        }
    }
`