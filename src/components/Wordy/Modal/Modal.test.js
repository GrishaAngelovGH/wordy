import { render } from '@testing-library/react'

import Modal from './Modal'

test('should render component', () => {
  const container = render(<Modal title={'title'} message={'message'} />)

  expect(container).toMatchSnapshot()
})