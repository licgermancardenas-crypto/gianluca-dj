import { nav as navItems } from './data.js'

const HEADER_OFFSET = 72

/** Smooth scroll para cualquier `[data-scroll]`, compensando el header fijo. */
export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-scroll]')
    if (!link) return

    const id = link.getAttribute('href')?.slice(1)
    const target = id && document.getElementById(id)
    if (!target) return

    e.preventDefault()
    closeMenu()

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
    history.replaceState(null, '', `#${id}`)
  })
}

/** Marca el link activo según la sección visible. */
export function initScrollSpy() {
  const links = new Map(
    navItems.map((item) => [item.id, document.querySelector(`[data-nav="${item.id}"]`)])
  )

  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)

  if (!sections.length) return

  const setActive = (id) => {
    links.forEach((link, key) => link?.classList.toggle('active', key === id))
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible) setActive(visible.target.id)
    },
    { rootMargin: `-${HEADER_OFFSET + 8}px 0px -55% 0px`, threshold: [0.1, 0.35, 0.6] }
  )

  sections.forEach((section) => observer.observe(section))
}

/** Sombra + fondo sólido en el header al scrollear. */
export function initHeaderState() {
  const header = document.getElementById('header')
  if (!header) return

  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24)

  update()
  window.addEventListener('scroll', update, { passive: true })
}

function closeMenu() {
  const toggle = document.getElementById('nav-toggle')
  document.body.classList.remove('menu-open')
  toggle?.setAttribute('aria-expanded', 'false')
  toggle?.setAttribute('aria-label', 'Open menu')
}

/** Menú hamburguesa en mobile. */
export function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle')
  if (!toggle) return

  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open')
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu()
  })

  // Volver a desktop con el menú abierto dejaría el body bloqueado.
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
    if (e.matches) closeMenu()
  })
}
