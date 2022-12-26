import { Meta, StoryObj } from '@storybook/react'
import { TextAreaProps, TextArea, Box, Text } from '@gh-ignite-ui/react'

export default {
    title: 'Form/TextArea',
    component: TextArea,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm">Add a comment</Text>
                    {Story()}
                </Box >
            )
        }
    ],


} as Meta


export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add any observations....',
    }
}


export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}








