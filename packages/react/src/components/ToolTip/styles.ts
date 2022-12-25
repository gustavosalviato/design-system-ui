import { styled } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip';
import { keyframes } from '@stitches/react'

const SlideBottomAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(2px)'
    },

    to: {
        opacity: 1,
        transform: 'translateY(0)'
    }
})

const SlideUpAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(-2px)'
    },

    to: {
        opacity: 1,
        transform: 'translateY(0)'
    }
})





export const ToolTipContainer = styled(Tooltip.Content, {
    borderRadius: '$xs',
    padding: '$3 $4',
    fontSize: '$sm',
    color: '$gray100',
    fontFamily: '$default',
    fontWeight: '$medium',
    backgroundColor: '$gray900',
    userSelect: 'none',
    boxShadow: '2.8px 2.8px 2.2px rgba(0,0,0,0.02)',
    border: '1px solid $gray900',
    animationDuration: '400ms',

    '&[data-state="delayed-open"][data-side="bottom"]': {
        animationName: SlideBottomAndFade,
    },


    '&[data-state="delayed-open"][data-side="top"]': {
        animationName: SlideUpAndFade,
    },

    


    '.ToolTipArrow': {
        fill: '$gray900',
    }
})


