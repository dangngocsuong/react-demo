import { FunctionComponent, MouseEvent, ReactNode } from "react";
import { StyleButton } from "./styled";

const Button: FunctionComponent<{
    text: string;
    htmlType?: "button" | "submit" | "reset" | undefined;    
    type?: "dashed" | "default" | "text" | "link" | "primary" | undefined;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    theme?: string;
}> = ({
    type,
    text,
    htmlType,
    icon,
    iconPosition,
    onClick,
    loading,
    theme,
}) => {
    return (
        <StyleButton 
        type={type} 
        htmlType={htmlType}
        icon={icon}
        className={`icon-${iconPosition}`}
        onClick={onClick}
        loading={loading}
        $theme={theme}
        >{text}</StyleButton>
    )
}

Button.defaultProps = {
    onClick: () => null,
}

export default Button;