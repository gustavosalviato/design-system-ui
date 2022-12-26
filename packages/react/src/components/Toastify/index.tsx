import * as Toast from '@radix-ui/react-toast';
import { ComponentProps } from '@stitches/react';
import { X } from 'phosphor-react';
import { useState } from 'react';
import { Text } from '../Text';
import { ToastContainer, ToastClose, ToastViewPort } from './styles';

export type ToastifyProps = ComponentProps<typeof ToastContainer> & {
    title: string,
    description: string,
}


export function Toastify({ title, description, ...props }: ToastifyProps) {

    return (
        <Toast.Provider swipeDirection='right'>

            <ToastContainer {...props}>
                <Toast.Title asChild>
                    <Text
                        size={'xl'}
                        weight={'bold'}
                    >
                        {title}
                    </Text>
                </Toast.Title>

                <Toast.Description asChild>
                    <Text size={'xs'}>
                        {description}
                    </Text>
                </Toast.Description>

                <ToastClose asChild>
                    <X size={20} />
                </ToastClose>
            </ToastContainer>

            <ToastViewPort />
        </Toast.Provider>
    )
}

Toastify.displayName = 'Toastify';