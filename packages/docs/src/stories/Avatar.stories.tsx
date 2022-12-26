import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@gh-ignite-ui/react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,


    args: {
        src: 'https://avatars.githubusercontent.com/u/75762976?v=4',
        alt: 'Gustavo Salviato'
    }
} as Meta


export const Primary: StoryObj<AvatarProps> = {}


export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}





