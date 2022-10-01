import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoHeader from './TodoHeader.vue'

describe('TodoHeader.vue', () => {
  test('renders the header text', () => {
    const wrapper = mount(TodoHeader)
    const header = wrapper.get('.alert-heading')
    expect(header.text()).toContain('Todo List App')
  })

  test('renders the image', () => {
    const wrapper = mount(TodoHeader)
    const image = wrapper.get('.img-fluid')
    expect(image.attributes('src')).toBe('clearPointLogo.png');
  })
})
