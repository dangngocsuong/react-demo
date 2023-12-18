
import styled from "styled-components";
import theme from "styles/theme";
import imgPageTitle from "assets/images/bg-page-title.jpg";

export const SitePageTitle = styled.div`
    padding-top: 68px;
    padding-bottom: 68px;
    text-align: center;
    position: relative;
    background-image: url(${imgPageTitle});

    .page-title__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #000;
        opacity: .7;
    }

    h1 {
        font-weight: 300;
        font-size: 30px;
        line-height: 1.2;
        color: ${theme.colors.white};
        margin-top: 6px;
        margin-bottom: 6px;
    }

    a {
        color: ${theme.colors.white};

        &:hover {
            color: ${theme.colors.monza};
        }
    }

    .ant-breadcrumb {
        display: flex;
        justify-content: center;
    }

    .ant-breadcrumb li {
        display: inline-block;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.8;
        color: ${theme.colors.monza};
        word-break: break-word;
        position: relative;
    }
`