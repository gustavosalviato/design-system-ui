import { colors } from '@gh-ignite-ui/tokens'
import { getContrast } from 'polished'
import { ColorGridContainer } from './styles'

export function ColorGrid() {
    return Object.entries(colors).map(([key, value]) => {
        return (
            <ColorGridContainer key={key} style={{
                backgroundColor: value,
                padding: '2rem',
            }}>
                <li
                    style={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF'
                    }}
                >
                    <strong>${key}</strong>
                    <span>{value}</span>

                </li>
            </ColorGridContainer>
        )
    })
}