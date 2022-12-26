import { Button, Toastify, ToastifyProps } from "@ignite-ui/react"
import { useEffect, useRef, useState } from "react"
import { Meta, StoryObj } from '@storybook/react'


const DemoToast = (props: ToastifyProps) => {
    const [open, setOpen] = useState(false)

    const timerRef = useRef(0)
    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    function handleOpenToast() {
        setOpen(false)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
            setOpen(true)
        }, 100)
    }

    return (
        <div>
            <Button onClick={handleOpenToast}>Agendar</Button>
            <Toastify open={open} onOpenChange={setOpen} {...props} />
        </div>
    )
}

export default {
    title: 'Form/Toastify',
    component: DemoToast,

    args: {
        title: 'Agendamento realizado',
        description: 'Quarta-feira, 23 de Outubro às 16h'
    }
} as Meta<ToastifyProps>



export const Primary: StoryObj<ToastifyProps> = {}