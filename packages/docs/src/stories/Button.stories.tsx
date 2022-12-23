import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { GitCommit } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,

    args: {
        children: 'Send',
    },

    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio',
            }
        },

        size: {
            options: ['sm', 'md',],
            control: {
                type: 'inline-radio',
            }
        }
    }

} as Meta<ButtonProps>


export const Primary: StoryObj<ButtonProps> = {
    args: {
        size: 'md',
        variant: 'primary',
    }

}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
    }
}
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}


export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Enviar
                <GitCommit />

            </>
        ),

        variant: 'secondary',
    }
}





