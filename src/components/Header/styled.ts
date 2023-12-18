import styled from "styled-components";
import theme from "styles/theme";
import { Menu } from "antd";

export const SiteHeader = styled.header`
    position: relative;
`
export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
`

export const HeaderBottom = styled.div`
    background: ${theme.colors.gray};        
`

export const MenuTop = styled(Menu)`
    color: ${theme.colors.white};
    background: transparent;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;    

    &.ant-menu-horizontal .ant-menu-item {
        padding-inline: 28px;
    }

    &.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected,
    &.ant-menu-light .ant-menu-item:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected):hover,
    &.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title, 
    &.ant-menu-light>.ant-menu .ant-menu-submenu-selected >.ant-menu-submenu-title,
    &.ant-menu-light .ant-menu-item-selected, 
    &.ant-menu-light>.ant-menu .ant-menu-item-selected {
        color: ${theme.colors.monza};
        background: transparent;
    }
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected::after,
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-item:hover::after,
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu:hover::after,
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-active::after,
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-open::after,  
    &.ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-item-selected::after, 
    &.ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-selected::after, 
    &.ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-submenu-selected::after{
        border-bottom-color: ${theme.colors.monza};
    }
`