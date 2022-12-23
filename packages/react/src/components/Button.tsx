import { styled } from '../styles'
import { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<typeof Button>

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  transition: 'all 0.2s ease-in-out',


  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',


  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },


  variants: {
    variant: {
      primary: {
        background: '$ignite500',
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        }
      },


      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white'
        }
      },


      tertiary: {
        color: '$gray100',


        '&:not(:disabled):hover': {
          color: '$white'
        }
      }




    },


    size: {
      md: {
        height: 46
      },

      sm: {
        height: 38,
      }
    },
  },


  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }


})

Button.displayName = 'Button';
