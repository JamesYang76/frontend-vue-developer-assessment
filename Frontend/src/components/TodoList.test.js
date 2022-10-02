import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { findAllByText } from '../utils/testUtil.js'
import TodoList from './TodoList.vue'

describe('TodoList.vue', () => {
  test('renders the header, and items list', () => {
    let items = [
      { id: 1, description: 'test 1', isCompleted: false },
      { id: 2, description: 'test 2', isCompleted: false },
      { id: 2, description: 'test 3', isCompleted: true },
    ]
    const wrapper = mount(TodoList,{ props: { items: items } })

    expect(wrapper.find('h1').text()).toContain('Showing 3 Item(s)')

    const refreshBtn = findAllByText(wrapper, 'button', /Refresh/).at(0)
    expect(refreshBtn.exists()).toBeTruthy();

    const unCompletedCount = findAllByText(wrapper, 'button', /Mark as completed/).length
    expect(unCompletedCount).toBe(2)

    const completedCount =  findAllByText(wrapper, 'button', /UnMark completed/).length
    expect(completedCount).toBe(1)
  })

  test('Refresh button makes getTodoItems emitted', () => {
    const wrapper = mount(TodoList,{ props: { items: [] } })
    const refreshBtn = findAllByText(wrapper, 'button', /Refresh/).at(0)
    refreshBtn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('getTodoItems')
  })

  test('Mark as completed button makes toggleTodoItem emitted', () => {
    const wrapper = mount(TodoList,{ props: { items: [ { id: 1, description: 'test 1', isCompleted: false }] } })
    const completedBtn = findAllByText(wrapper, 'button', /Mark as completed/).at(0)
    completedBtn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggleTodoItem')
  })

  test('UnMark completed button makes toggleTodoItem emitted', () => {
    const wrapper = mount(TodoList,{ props: { items: [ { id: 1, description: 'test 1', isCompleted: true }] } })
    const unCompletedBtn = findAllByText(wrapper, 'button', /UnMark completed/).at(0)
    unCompletedBtn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggleTodoItem')
  })
})

