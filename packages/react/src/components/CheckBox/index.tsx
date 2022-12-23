import { ComponentProps } from "@stitches/react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import { Check } from 'phosphor-react'
export type CheckBoxProps = ComponentProps<typeof CheckBoxContainer>


export function CheckBox(props: CheckBoxProps) {
    return (
        <CheckBoxContainer {...props} >
            <CheckBoxIndicator asChild>
                <Check weight="bold" />
            </CheckBoxIndicator>
        </CheckBoxContainer>
    )
}



CheckBox.displayName = 'CheckBox';