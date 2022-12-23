import { styled } from '../../styles'

export const InputContainer = styled('div', {
    background: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    border: '2px solid $gray900',
    alignItems: 'baseline',

    '&:has(input:focus)': {
        borderColor: '$ignite300',
    },

    '&:has(input:disabled)': {
        opacity: 0.6,
        cursor: 'not-allowed',
    }
})

export const Prefix = styled('span', {
    fontFamily: '$default',
    fontSize: 'small',
    fontWeight: '$regular',
    color: '$gray400',


})

export const Input = styled('input', {
    border: 0,
    background: 'transparent',
    fontFamily: '$default',
    fontSize: 'small',
    fontWeight: '$regular',
    color: '$white',


    '&:focus': {
        outline: 0
    },


    '&:placeholder': {
        color: '$gray400'
    },

    '&:disabled': {
        cursor: 'not-allowed',
    }

})