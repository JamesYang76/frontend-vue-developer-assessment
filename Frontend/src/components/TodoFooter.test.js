import {describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import TodoFooter from './TodoFooter.vue'

describe("TodoFooter.vue", () => {
  test('renders the footer text', () => {
    render(TodoFooter)
    const footerText = screen.getByText('© 2021 Copyright:')
    expect(footerText).toBeTruthy();
  })

  test('renders the link with text', () => {
    render(TodoFooter)
    const aLink = document.querySelector('a')
    expect(aLink.text).toBe('clearpoint.digital')
    expect(aLink).toHaveProperty('href', 'https://clearpoint.digital/');
  })
})
