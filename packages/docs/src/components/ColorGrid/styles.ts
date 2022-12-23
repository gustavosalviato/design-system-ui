import { styled } from '../../../../react/src/styles'

export const ColorGridContainer = styled('div', {


    'div + li:first-child': {
        borderTopLeftRadius: '$md',
        borderTopRightRadius: '$md'
    },

    '&:last-child': {
        borderBottomLeftRadius: '$md',
        borderBottomRightRadius: '$md'
    }
})

