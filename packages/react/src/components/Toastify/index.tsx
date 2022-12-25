import * as Toast from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { useState } from 'react';
import { Text } from '../Text';
import { ToastContainer, ToastClose, ToastButton } from './styles';


export function Toastify() {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    return (
        <Toast.Provider swipeDirection='right'>
            <ToastButton onClick={handleOpen}>
                Add to Calendar
            </ToastButton>

            <ToastContainer open={open} onOpenChange={setOpen}>
                <Toast.Title asChild>
                    <Text
                        size={'xl'}
                        weight={'bold'}
                    >
                        Agendamento Realizado
                    </Text>
                </Toast.Title>

                <Toast.Description asChild>
                    <Text size={'xs'}>
                        Quarta-feira, 23 de Outubro às 16h
                    </Text>
                </Toast.Description>

                <ToastClose asChild>
                    <X size={20} />
                </ToastClose>
            </ToastContainer>

            <Toast.Viewport />
        </Toast.Provider>
    )
}