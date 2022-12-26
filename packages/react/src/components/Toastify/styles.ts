import { styled } from "../../styles";
import { keyframes } from '../../styles'
import * as Toastify from '@radix-ui/react-toast';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});

const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});


export const ToastContainer = styled(Toastify.Root, {
    position: 'relative',
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
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
    },

})


export const ToastClose = styled(Toastify.Close, {
    all: 'unset',
    position: 'absolute',
    cursor: 'pointer',
    top: '$4',
    right: '$4',
    color: '$gray200',
    backgroundColor: 'transparent',
    fontSize: 0,

})


export const ToastViewPort = styled(Toastify.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: VIEWPORT_PADDING,
    gap: 10,
    width: 390,
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 999,
    outline: 'none'
})