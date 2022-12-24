import { ComponentProps } from "@stitches/react";
import { ReactNode } from "react";
import { FlexContainer } from "./styles";

export type FlexProps = ComponentProps<typeof FlexContainer> & {
    children: ReactNode
}

export function Flex({ children }: FlexProps) {
    return (
        <FlexContainer>
            {children}
        </FlexContainer>
    )
}