import {describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

describe('App.vue', () => {
  test('renders child components', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent(TodoHeader).isVisible()).toBe(true)
    expect(wrapper.findComponent(TodoInput).isVisible()).toBe(true)
    expect(wrapper.findComponent(TodoList).isVisible()).toBe(true)
    expect(wrapper.findComponent(TodoFooter).isVisible()).toBe(true)
  })
})
