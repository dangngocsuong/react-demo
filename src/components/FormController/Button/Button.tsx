import { FunctionComponent, MouseEvent, ReactNode } from "react";
import { StyleButton } from "./styled";

const Button: FunctionComponent<{
    text: string;
    htmlType?: "button" | "submit" | "reset" | undefined;    
    type?: "dashed" | "default" | "text" | "link" | "primary" | undefined;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
}> = ({
    type,
    text,
    htmlType,
    icon,
    iconPosition,
    onClick,
    loading,
}) => {


    return (
        <StyleButton 
        type={type} 
        htmlType={htmlType}
        icon={icon}
        className={`icon-${iconPosition}`}
        onClick={onClick}
        loading={loading}
        >{text}</StyleButton>
    )
}

export default Button;