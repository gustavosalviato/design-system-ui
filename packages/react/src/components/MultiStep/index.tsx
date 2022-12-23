import { ComponentProps } from "react"
import { Label, MultiStepContainer, Step, Steps } from "./styles"

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
    currentStep?: number,
    size: number,
}

export function MultiStep({ currentStep = 2, size = 4 }: MultiStepProps) {
    return (
        <MultiStepContainer>
            <Label>
                Passo {currentStep} de {size}
            </Label>

            <Steps css={{ '--steps-size': size }}>
                {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
                    return (
                        <Step
                            key={step}
                            active={currentStep >= step}
                        />
                    )
                })}
            </Steps>
        </MultiStepContainer >
    )
}

MultiStep.displayName = 'MultiStep';