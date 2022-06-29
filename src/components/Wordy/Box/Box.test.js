import { render } from '@testing-library/react'

import Box from './Box'

test('should render component', () => {
    const container = render(<Box value={'a'} color={'bg-white'} />)

    expect(container).toMatchSnapshot()
})