import { ComponentProps } from "@stitches/react";
import { styled } from "../../styles";

export type TextAreaProps = ComponentProps<typeof TextArea>

export const TextArea = styled('textarea', {
    background: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    border: '2px solid $gray900',

    fontFamily: '$default',
    fontSize: 'small',
    fontWeight: '$regular',
    color: '$white',

    resize: 'vertical',


    '&:focus': {
        outline: 0,
        borderColor: '$ignite300',
    },

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',

    },

    '&:placeholder': {
        color: '$gray400',
    }

})


TextArea.displayName = 'TextArea';