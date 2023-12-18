import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input as AntInput, InputProps } from 'antd';
import { ChangeEvent, FunctionComponent, ReactNode, useState } from 'react';
import { Control, RegisterOptions, get, useController } from 'react-hook-form';
import {  FieldSet, FormControl, Label, MessageError } from './styled';

const Input: FunctionComponent<{
    name: string;
    control: Control;
    type: string;
    rules?: RegisterOptions;
    value?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    disabled?: boolean;
    suffix?: ReactNode | boolean;
    prefix?: ReactNode | boolean;
    theme?: string;
    size?: InputProps['size'];
    label?: string;
    width?: string;
}> = ({
    name,
    control,
    type,
    rules,
    value,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    disabled,
    suffix,
    prefix,
    theme,
    size,
    label,
    width,
}) => {

        const [showPassword, setShowPassword] = useState<boolean>(false);
        const inputType: string = type === 'password' ? showPassword ? 'text' : 'password' : type;

        const { field, formState } = useController({
            control,
            name,
            rules,
            defaultValue: value,
        });
        const errors = get(formState.errors, name);

        const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            field.onChange(event);
            onChange && onChange(event);
        }

        const handleBlur = () => {
            onBlur && onBlur();
        }

        const handleFocus = () => {
            onFocus && onFocus();
        }

        const toggleShowPassword = () => {
            setShowPassword(!showPassword);
        }

        const renderSuffix = (): ReactNode => {
            if (type === 'password' && suffix) {
                return showPassword ? <EyeOutlined onClick={toggleShowPassword} /> : <EyeInvisibleOutlined onClick={toggleShowPassword} />
            }
            return suffix
        }

        const renderPrefix = (): ReactNode => {
            if (type === 'password' && prefix) {
                return showPassword ? <EyeOutlined onClick={toggleShowPassword} /> : <EyeInvisibleOutlined onClick={toggleShowPassword} />
            }
            return prefix;
        }

        return (
            <FieldSet $theme={`${theme}`}>
                {label && <Label required={Boolean(rules.required)}>{label}</Label>}
                <FormControl width={width}>
                <AntInput
                    type={inputType}
                    name={name}
                    value={field.value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    disabled={disabled}
                    status={errors && 'error'}
                    suffix={renderSuffix()}
                    prefix={renderPrefix()}
                    size={size}
                />                    
                {errors && (<MessageError>{errors.message}</MessageError>)}
                </FormControl>
            </FieldSet>
        );
    }

Input.defaultProps = {
    type: 'text',
    value: '',    
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
};

export default Input;