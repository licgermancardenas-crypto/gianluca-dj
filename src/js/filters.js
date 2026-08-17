/** Filtrado de la grilla de música por categoría. */
export function initFilters() {
  const buttons = document.querySelectorAll('[data-filter]')
  const cards = document.querySelectorAll('[data-category]')
  const empty = document.getElementById('music-empty')

  if (!buttons.length || !cards.length) return

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter

      buttons.forEach((b) => {
        const active = b === button
        b.toggleAttribute('data-active', active)
        b.setAttribute('aria-selected', String(active))
      })

      let shown = 0
      cards.forEach((c) => {
        const match = filter === 'All' || c.dataset.category === filter
        c.hidden = !match
        if (match) shown++
      })

      if (empty) empty.hidden = shown > 0
    })
  })
}
