import { render } from '@testing-library/react'

import Wordy from './Wordy'

test('should render Wordy component', () => {
    const view = render(<Wordy />)

    expect(view).toMatchSnapshot()
})