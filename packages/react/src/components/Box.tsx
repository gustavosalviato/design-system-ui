import { styled } from '../styles'
import { ComponentProps } from 'react'

export type BoxProps = ComponentProps<typeof Box>

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
})

Box.displayName = 'Box';
