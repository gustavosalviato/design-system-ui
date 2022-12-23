import { styled } from "../../styles"
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    width: '$12',
    height: '$12',
    overflow: 'hidden',
})


export const AvatarImage = styled(Avatar.Image, {
    overflow: 'inherit',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})


export const AvatarFallBack = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray800',
    color: '$gray100',

    svg: {
        width: '$6',
        height: '$6',
    }
})