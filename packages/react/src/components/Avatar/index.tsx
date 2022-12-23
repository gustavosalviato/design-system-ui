import { User } from "phosphor-react";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallBack, AvatarImage } from "./styles";

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage
                {...props}
            />

            <AvatarFallBack delayMs={6000}>
                <User />
            </AvatarFallBack>
        </AvatarContainer>
    )
}

Avatar.displayName = 'Avatar';


