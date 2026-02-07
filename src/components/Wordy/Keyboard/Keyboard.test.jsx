import { render } from '@testing-library/react'
import { defaultKeyColors } from './keys'

import Keyboard from './Keyboard'

test('should render Keyboard component', () => {
    const keyColors = {
        ...defaultKeyColors,
        s: 'bg-success',
        m: 'bg-warning',
        i: 'bg-secondary',
        l: 'bg-secondary',
        e: 'bg-secondary'
    }
    const view = render(
        <Keyboard
            keyColors={keyColors}
        />
    )

    expect(view).toMatchSnapshot()
})