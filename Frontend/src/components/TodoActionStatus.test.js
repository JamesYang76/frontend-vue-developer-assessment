import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoActionStatus from './TodoActionStatus.vue'

describe('TodoActionStatus.vue', () => {
  test('renders the status message', () => {
    let status = { message: 'Test Message', error: false }
    const wrapper = mount(TodoActionStatus,{
      props: { status: status }
    })
    expect(wrapper.text()).toContain(status.message)
  })

  test('renders the status error message', () => {
    let status = { message: 'Error Message', error: true }
    const wrapper = mount(TodoActionStatus,{
      props: { status: status }
    })
    expect(wrapper.text()).toContain(status.message)
    expect(wrapper.classes()).toContain('error')
  })
})
