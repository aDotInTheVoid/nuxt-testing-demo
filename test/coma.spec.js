import { mount, shallowMount } from '@vue/test-utils'
import ComA from '@/components/ComA.vue'

describe('a', () => {
	test('full mount', () => {
		const a = mount(ComA)
	})

	test('shallow mount', () => {
		const a = shallowMount(ComA)
	})
})


