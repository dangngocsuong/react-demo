import styled from "styled-components";
import theme from "./theme";
import { Tag } from "antd";
import CheckableTag from "antd/es/tag/CheckableTag";
import Title from "antd/es/typography/Title";

export const StyleSidebar = styled.div`
.sidebar {
    width: 270px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100%;

    .widget-categories {
        ul li a {
            padding-left: 20px;
            position: relative;
        }

        ul li a::before {
            content: '';
            position: absolute;
            top: calc(50% - 5px);
            left: 0;
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-left: 5px solid #c7c7c7;
            border-bottom: 5px solid transparent;
            transition: all 0.2s;
        }

        ul li a:hover:before {
            animation-name: left-to-right;
            animation-duration: .7s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    .widget>h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: calc(50% - 7.5px);
        width: 3px;
        height: 15px;
        background-color: ${theme.colors.monza};
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        padding: 0;
        position: unset;
        height: auto;
    }
}

.widget {
    margin-top: 50px;

    &:first-of-type {
        margin-top: 0;
    }

    ul li {
        margin-top: 10px;
        line-height: 1.5;

        :first-child {
            margin-top: 0px;
        }

        a {
            color: inherit;
        }

        a:hover {
            color: ${theme.colors.monza};
        }

        a:hover::before {
            border-left-color: ${theme.colors.monza};
        }
    }
}

/* .widget-search {
    position: relative;

    input[type="search"] {
        border: none;
        border-bottom: 1px solid #e7e7e7;
        padding-right: 40px;
        width: 100%;
        height: 40px;
        outline: none;

        &:focus {
            border-bottom-color: ${theme.colors.monza};
        }
    }

    button {
        border: none;
        width: 40px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background: transparent;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.monza};
        }
    }
} */

.widget-tag-cloud {
    &__tagcloud {
        display: flex;
        flex-wrap: wrap;
    }

    &__tagcloud--link {
        font-size: 14px;
        line-height: 1.5;
        color: ${theme.colors.dovegray};
        border: 1px solid #e5e5e5;
        padding: 5px 15px;
        margin: 4px;
        text-transform: capitalize;

        &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.monza};
            border-color: ${theme.colors.monza};
        }
    }
}
`
export const CustomCheckableTag = styled(CheckableTag)`
    font-size: 14px;
    line-height: 1.5;
    color: #6e6e6e;
    border: 1px solid #e5e5e5;
    padding: 5px 15px;
    text-transform: capitalize;
    border-radius: 0;
    background-color: transparent;

    &.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.monza};
        border-color: ${theme.colors.monza};
    }

    &.ant-tag-checkable-checked {
        color: ${theme.colors.white};
        background-color: ${theme.colors.monza};
        border-color: ${theme.colors.monza};
    }
`

export const HeadingSidebar = styled(Title)`
    &.ant-typography {
        font-weight: 600;
        font-size: 16px;
        color: #1e1e1e;
        text-transform: uppercase;
        padding-left: 15px;
        position: relative;
        margin-bottom: 21px;

        ::before {
            content: '';
            width: 3px;
            height: 100%;
            background-color: ${theme.colors.monza};
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`
