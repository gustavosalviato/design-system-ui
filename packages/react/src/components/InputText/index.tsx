import { Input, InputContainer, Prefix } from "./styles"
import { ComponentProps } from 'react'

export type InputTextProps = ComponentProps<typeof Input> & {
    prefix?: string
}

export function InputText({ prefix, ...props }: InputTextProps) {
    return (
        <InputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input
                {...props}
            />
        </InputContainer>
    )
}

InputText.displayName = 'InputText';