import * as Tooltip from '@radix-ui/react-tooltip';

import { Button } from '../Button';
import { ArrowRight } from 'phosphor-react'
import { ToolTipContainer } from './styles';
import { ComponentProps, ReactNode } from 'react';

export type ToolTipProps = ComponentProps<typeof Tooltip.Root> & {
    description: string | ReactNode,
    children: ReactNode,
}

export function ToolTip({ children, description, ...props }: ToolTipProps) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root {...props}>
                <Tooltip.Trigger asChild>
                    {children}
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


ToolTip.displayName = 'ToolTip';