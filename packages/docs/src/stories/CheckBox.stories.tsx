import { Meta, StoryObj } from '@storybook/react'
import { TextAreaProps, CheckBox, Box } from '@ignite-ui/react'

export default {
    title: 'Form/CheckBox',
    component: CheckBox,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
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








