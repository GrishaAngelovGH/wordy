import { render } from '@testing-library/react'

import Keyboard from './Keyboard'

test('should render Keyboard component', () => {
    const view = render(
        <Keyboard
            word={['s', 'm', 'i', 'l', 'e']}
            wordColors={['bg-success', 'bg-warning', 'bg-secondary', 'bg-secondary', 'bg-secondary']}
        />
    )

    expect(view).toMatchSnapshot()
})