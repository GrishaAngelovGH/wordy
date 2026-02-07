import React from 'react'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

vi.mock('react-bootstrap/Modal', async (importOriginal) => {
  const actual = await importOriginal()
  const MockModal = (props) => {
    return React.createElement(actual.default, { ...props, animation: false })
  }
  // Copy static properties like Header, Body, Footer, etc.
  Object.assign(MockModal, actual.default)
  return {
    ...actual,
    default: MockModal
  }
})
