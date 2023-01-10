import { render } from '@testing-library/react'

import Wordy from './Wordy'

test('should render component', () => {
  const container = render(<Wordy />)

  expect(container).toMatchSnapshot()
})