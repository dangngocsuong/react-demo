import styled, { css } from "styled-components";
import { Button } from "antd";
import theme from "styles/theme";

export const StyleButton = styled(Button)<{$theme?:string}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &.icon-right {
        flex-direction: row-reverse;
    }

    &.icon-left.ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon.ant-btn-loading-icon, 
    &.icon-left.ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon:not(:last-child) {
        margin-inline-end: 8px;
    }

    &.icon-right.ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon.ant-btn-loading-icon, 
    &.icon-right.ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon:not(:last-child) {
        margin-inline-start: 8px;

    }
    
    ${({$theme}) => $theme === "light" && css`
        background-color: ${theme.colors.monza};
        &.ant-btn:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: ${theme.colors.milanored} ;
        }
    `}

    ${({$theme}) => $theme === "dark" && css`
        background-color: transparent;
        border: 1px solid ${theme.colors.white};
        
        &.ant-btn:not(:disabled):not(.ant-btn-disabled):hover {
            background-color: ${theme.colors.milanored};
            border-color: ${theme.colors.milanored};
        }
    `}    
`