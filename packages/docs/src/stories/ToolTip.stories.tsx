import { Meta, StoryObj } from '@storybook/react'
import { Box, ToolTip, ToolTipProps, Text, InputText, Flex, Button } from '@ignite-ui/react'

export default {
    title: 'Form/ToolTip',
    component: ToolTip,
    args: {
        children: (<Button css={{ marginTop: 8 }}>Hover me</Button>),
        description: 'This is a description for a ToolTip',
    },

    argTypes: {
        description: {
            control: {
                type: 'text',
            }
        }
    },

    decorators: [
        (Story) => {
            return (
                <Box
                    css={{
                        display: 'flex', flexDirection: 'column'
                    }}
                >

                    <Text
                        size={'sm'}
                        css={{ marginBottom: 8 }}

                    >
                        Nome do usuário</Text>
                    <InputText prefix='cal.com/' placeholder='Type your name' />

                    <Text
                        size={'sm'}
                        css={{ marginTop: 16, marginBottom: 8 }}
                    >
                        Nome completo</Text>
                    <InputText
                        placeholder='type your full name here'
                    />
                    {Story()}
                </Box >
            )
        }
    ]

} as Meta<ToolTipProps>


export const Primary: StoryObj<ToolTipProps> = {
    args: {
        description: 'Next step'
    }
}








