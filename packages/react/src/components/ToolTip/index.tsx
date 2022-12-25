import * as Tooltip from '@radix-ui/react-tooltip';

import { Button } from '../Button';
import { ArrowRight } from 'phosphor-react'
import { ToolTipContainer } from './styles';
import { ComponentProps } from 'react';

export type ToolTipProps = ComponentProps<typeof ToolTipContainer> & {
    description: string
}

export function ToolTip({ description }: ToolTipProps) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Button
                        css={{ marginTop: 8 }}>
                        Proceed
                        <ArrowRight width={24} />
                    </Button>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                    <ToolTipContainer>
                        {description}
                        <Tooltip.Arrow
                            className='ToolTipArrow'
                        />
                    </ToolTipContainer>

                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}