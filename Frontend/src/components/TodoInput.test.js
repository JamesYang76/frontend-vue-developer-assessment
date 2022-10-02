import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { findAllByText } from '../utils/testUtil.js'
import TodoInput from './TodoInput.vue'

describe('TodoInput.vue', () => {
  test('renders the header, label, input, buttons', () => {
    const wrapper = mount(TodoInput)

    expect(wrapper.find('h1').text()).toBe('Add Item')
    expect(wrapper.find('label').text()).toBe('Description')
    expect(wrapper.find('input').exists()).toBeTruthy();

    const addBtn = findAllByText(wrapper, 'button', /Add Item/).at(0)
    expect(addBtn.exists()).toBeTruthy();

    const clearBtn = findAllByText(wrapper, 'button', /Clear/).at(0)
    expect(clearBtn.exists()).toBeTruthy();
  })

  test('Clear button clears the value', async () => {
    const wrapper = mount(TodoInput)

    const input = wrapper.find('input')
    await input.setValue('test')
    expect(input.element.value).toBe('test')

    const clearBtn = findAllByText(wrapper, 'button', /Clear/).at(0)
    await clearBtn.trigger('click')
    expect(input.element.value).toBe('')
  })

  test('Add Item button makes emitted', () => {
    const wrapper = mount(TodoInput)

    const addBtn = findAllByText(wrapper, 'button', /Add Item/).at(0)
    addBtn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('addTodoItem')
  })
})