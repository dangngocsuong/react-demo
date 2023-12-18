import styled from "styled-components";
import { Button } from "antd";

export const StyleButton = styled(Button)`
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
`