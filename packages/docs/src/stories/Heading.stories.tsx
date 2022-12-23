import { Meta, StoryObj } from '@storybook/react'
import { AvatarProps, Heading, HeadingProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Headings',
    component: Heading,

    args: {
        children: "Simple Heading"
    },

    argTypes: {
        size: {
            options: ['xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
        children: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {

    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
}

CustomTag.parameters = {
    docs: {
        description: {
            story: 'By default heading is always be an `h2`, but we can change that to `h1` with the `as` property',
        }
    }
}
