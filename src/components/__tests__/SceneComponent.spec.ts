import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import SceneComponent from '../SceneComponent.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(SceneComponent, { props: {} })
    expect(wrapper.text()).not.toContain('In')
  })
})
