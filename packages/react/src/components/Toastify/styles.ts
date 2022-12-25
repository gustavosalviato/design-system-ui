import { styled } from "../../styles";
import { keyframes } from '../../styles'
import * as Toastify from '@radix-ui/react-toast';

const SlideIn = keyframes({
    from: {
        transform: 'translateX(cal(100%))',
    },

    to: {
        transform: 'translateX(0)',
    }
})


const hide = keyframes({
    from: {
        opacity: 1
    },

    to: {
        opacity: 0
    }
})

export const ToastButton = styled('button', {
    all: 'unset',
    border: 0,
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$bold',
    borderRadius: '$sm',
    color: '$ignite300',
    backgroundColor: 'transparent',
    padding: '$2 $4',
    cursor: 'pointer',
    transition: '0.6s',


    '&:hover': {
        backgroundColor: '$ignite300',
        color: '$white',
    }
})


export const ToastContainer = styled(Toastify.Root, {
    width: '360px',
    height: '80px',
    position: 'fixed',

    backgroundColor: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '6px',
    boxShadow: 'hsl(206 22 % 7 % / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20 %) 0px 10px 20px - 15px',
    padding: '$3 $5',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    gap: '$1',


    '&[data-state="open"]': {
        animation: `${SlideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },


    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
    },

    '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe  -move-x}))'
    }

})


export const ToastClose = styled(Toastify.Close, {
    position: 'absolute',
    cursor: 'pointer',
    top: '20px',
    right: '20px',

    color: '$gray200',
    backgroundColor: 'transparent',
    fontSize: 0,
})



