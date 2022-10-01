import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoInput from './TodoInput.vue'

describe('TodoInput.vue', () => {
  test('renders the header, label, input, buttons', () => {
    const wrapper = mount(TodoInput)

    expect(wrapper.find('h1').text()).toBe('Add Item')
    expect(wrapper.find('label').text()).toBe('Description')
    expect(wrapper.find('input').exists()).toBeTruthy();

    const add_btn = wrapper.findAll('button').filter(n => n.text().match(/Add Item/)).at(0)
    expect(add_btn.exists()).toBeTruthy();

    const clear_btn = wrapper.findAll('button').filter(n => n.text().match(/Clear/)).at(0)
    expect(clear_btn.exists()).toBeTruthy();
  })

  test('Clear button clears the value', async () => {
    const wrapper = mount(TodoInput)

    const input = wrapper.find('input')
    await input.setValue('test')
    expect(input.element.value).toBe('test')

    const clear_btn = wrapper.findAll('button').filter(n => n.text().match(/Clear/)).at(0)
    await clear_btn.trigger('click')
    expect(input.element.value).toBe('')
  })

  test('Add Item button makes emited', async () => {
    const wrapper = mount(TodoInput)

    const add_btn = wrapper.findAll('button').filter(n => n.text().match(/Add Item/)).at(0)
    add_btn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('addTodoItem')
  })
})