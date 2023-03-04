import { render } from '@testing-library/react'

import Box from './Box'

test('should render Box component', () => {
    const view = render(<Box value={'a'} color={'bg-white'} />)

    expect(view).toMatchSnapshot()
})