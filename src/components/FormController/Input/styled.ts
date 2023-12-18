import styled, { css } from "styled-components";
import theme from "styles/theme";

export const FieldSet = styled.fieldset<{
    $theme: string;
}>`  
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .ant-input-affix-wrapper {
        flex: 1 1 0;
    }
    
    ${({ $theme }) => $theme === 'light' && css`
        .ant-input-affix-wrapper {
            border: 1px solid ${theme.colors.dovegray};
            background-color: ${theme.colors.white};

            input.ant-input {
                background-color: ${theme.colors.white};
                color: ${theme.colors.shark};

                &::placeholder {
                    color: ${theme.colors.dovegray};
                }
            }

            .ant-input-prefix,
            .ant-input-suffix {
                color: ${theme.colors.shark};
            }
        }
    ` }

    ${({ $theme }) => $theme === 'dark' && css`
        .ant-input-affix-wrapper {
            border: 1px solid ${theme.colors.white};
            background-color: ${theme.colors.shark};

            input.ant-input {
                background-color: ${theme.colors.shark};
                color: ${theme.colors.white};

                &::placeholder {
                    color: ${theme.colors.white};
                }
            }

            .ant-input-prefix,
            .ant-input-suffix {
                color: ${theme.colors.white};
            }
        }
    ` }
`;

export const FormControl = styled.div<{ width?: string }>`
    width: ${({ width }) => width}
`;

export const Label = styled.label<{
    required: boolean
}>`
    position: relative;
    flex-grow: 0;
    flex: 0 0 10%;
    max-width: 10%;
    text-align: end;
    &:after {
        content:":";
        margin-inline-start: 2px;
        margin-inline-end: 8px;
    }

    ${({ required }) => required && css`
        &:before {
            content: "*";
            margin-inline-end: 5px;
            color: ${theme.colors.monza};
        }
    `}
`;

export const MessageError = styled.div`
    height: 22px;
    margin-bottom: -22px;
    color: red;
    line-height: 1.5;
    font-size: 14px;
    box-sizing: border-box;
    word-break: break-word;
`;