import { Meta, StoryObj } from '@storybook/react'
import { Box, InputText, InputTextProps, Text } from '@ignite-ui/react'

export default {
    title: 'Form/InputText',
    component: InputText,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm">Email Adrress</Text>
                    {Story()}
                </Box >
            )
        }
    ],

} as Meta


export const Primary: StoryObj<InputTextProps> = {}

export const WithPrefix: StoryObj<InputTextProps> = {
    args: {
        prefix: 'cal.com/',

    }
}

export const DisabledInput: StoryObj<InputTextProps> = {
    args: {
        disabled: true,
    }
}





