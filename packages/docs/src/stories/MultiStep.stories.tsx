import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps, } from '@ignite-ui/react'

export default {
    title: 'Form/MultiStep',
    component: MultiStep,

    args: {},

    argTypes: {
        currentStep: {
            options: ['1', '2', '3', '4'],
            control: {
                type: 'select',
            }
        },
    },

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


export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4,
    }
}




