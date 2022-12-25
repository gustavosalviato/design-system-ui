import { Meta, StoryObj } from '@storybook/react'
import { Toastify, Box } from '@ignite-ui/react'

export default {
    title: 'Form/Toast',
    component: Toastify,

    decorators: [
        (Story) => {
            return (
                <Box>
                    {Story()}
                </Box >
            )
        }
    ]
} as Meta


export const Primary: StoryObj = {}








