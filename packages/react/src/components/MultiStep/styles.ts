import { GasPump } from "phosphor-react";
import { styled } from "../../styles";
import { Text } from '../Text'
export const MultiStepContainer = styled('div', {

})

export const Label = styled(Text, {
    color: '$gray400',

    defaultVariants: {
        size: 'xs'
    }
})

export const Steps = styled('div', {
    display: 'grid',
    gap: '$2',
    marginTop: '$2',
    gridTemplateColumns: 'repeat(var(--steps-size),1fr)',
})


export const Step = styled('div', {
    height: '$1',
    backgroundColor: '$gray100',
    borderRadius: '$px',

    variants: {
        active: {
            true: {
                background: '$gray400',
            }
        }
    }
})
