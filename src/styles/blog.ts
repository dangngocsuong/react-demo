import styled from "styled-components";
import theme from "./theme";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

export const Articles = styled.article`
    padding-bottom: 40px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 40px;
`

export const Figure = styled.figure`
    position: relative;
    display: flex;
    overflow: hidden;    

    &.article-figure {
        margin-bottom: 33px;
    }
`

export const ArticleDate = styled.div`
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    background: rgba(0, 0, 0, .6);
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
`

export const ArticleDateNumber = styled.span`
    font-weight: 400;
    font-size: 30px;
    line-height: 1.1;
`

export const ArticleTitle = styled(Title)`
    font-weight: 600;
    font-size: 26px;
    line-height: 1.3;
    color: ${theme.colors.gray};
    word-break: break-word;
    margin-bottom: 10px;

    a {
        color: ${theme.colors.gray};

        &:hover {
            color: ${theme.colors.monza};
        }
    }
`

export const ArticleContentInfo = styled.div`
    margin-bottom: 11px;
    font-size: 14px;
`

export const ArticleContentDesc= styled.div`
    margin-bottom: 30px;
`

export const ArticleContentInfoItem = styled.span`
    padding-left: 10px;
    margin-left: 10px;
    position: relative;

    &:first-child {
        padding-left: 0;
        margin-left: 0;
    }

    a {
        color: inherit;

        &:hover {
            color: ${theme.colors.monza};
        }
    }
`

export const ArticleReadMoreLink = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 40px;
    color: ${theme.colors.white};
    text-transform: uppercase;
    background: ${theme.colors.monza};
    padding: 10px 39px;
    border-radius: 50px;
    
    &:hover {
        background: ${theme.colors.milanored};
        color: ${theme.colors.white};
    }
`