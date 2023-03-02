import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import LayoutDefault from '@ui/Layouts/Default.vue'

describe('LayoutDefault', () => {
  it('should be rendered slot content correctly', async () => {
    const slotContent = 'Random content'

    render(LayoutDefault, {
      slots: { default: slotContent }
    })

    const view = await screen.findByText(slotContent)

    expect(view.innerHTML).toContain(slotContent)
  })
})
