import { tracks } from './data.js'

// Player simulado: no hay audio real todavía. Anima la onda y avanza una barra
// de progreso para que las tarjetas se sientan vivas. Al conectar SoundCloud /
// Spotify, reemplazar `start`/`stop` por la API del widget correspondiente.

const durations = new Map(
  tracks.map((t) => {
    const parts = t.duration.split(':').map(Number)
    const seconds = parts.reduce((acc, n) => acc * 60 + n, 0)
    return [t.id, seconds]
  })
)

let current = null
let timer = null

function card(id) {
  return document.querySelector(`[data-track="${id}"]`)
}

function stop() {
  if (!current) return

  const el = card(current)
  el?.classList.remove('is-playing')
  el?.querySelector('[data-play]')?.setAttribute('aria-pressed', 'false')
  el?.style.removeProperty('--progress')

  clearInterval(timer)
  timer = null
  current = null
}

function start(id) {
  const el = card(id)
  if (!el) return

  current = id
  el.classList.add('is-playing')
  el.querySelector('[data-play]')?.setAttribute('aria-pressed', 'true')

  // La demo comprime la pista real a 24s para que se vea el recorrido completo.
  const total = 24
  let elapsed = 0

  timer = setInterval(() => {
    elapsed += 0.1
    if (elapsed >= total) return stop()
    el.style.setProperty('--progress', `${(elapsed / total) * 100}%`)
  }, 100)
}

export function initPlayer() {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-play]')
    if (!button) return

    const id = button.dataset.play
    if (!durations.has(id)) return

    const wasPlaying = current === id
    stop()
    if (!wasPlaying) start(id)
  })

  // Si el usuario deja la pestaña, cortar la animación.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop()
  })
}
