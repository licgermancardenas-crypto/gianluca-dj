import { Header } from './components/header.js'
import { Hero } from './components/hero.js'
import { About } from './components/about.js'
import { Music } from './components/music.js'
import { Events } from './components/events.js'
import { Booking } from './components/booking.js'
import { Footer } from './components/footer.js'

import { initSmoothScroll, initScrollSpy, initHeaderState, initMobileMenu } from './nav.js'
import { initReveal } from './reveal.js'
import { initPlayer } from './player.js'
import { initFilters } from './filters.js'
import { initForm } from './form.js'

function render() {
  const root = document.getElementById('app')
  if (!root) throw new Error('#app not found')

  root.innerHTML = [
    Header(),
    `<main id="main">`,
    Hero(),
    About(),
    Music(),
    Events(),
    Booking(),
    `</main>`,
    Footer()
  ].join('')
}

function mount() {
  render()

  initHeaderState()
  initMobileMenu()
  initSmoothScroll()
  initScrollSpy()
  initReveal()
  initPlayer()
  initFilters()
  initForm()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount, { once: true })
} else {
  mount()
}
