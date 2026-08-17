/** Fade-in + slide-up al entrar en viewport. Se respeta prefers-reduced-motion. */
export function initReveal() {
  const items = document.querySelectorAll('[data-reveal]')
  if (!items.length) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  )

  // Escalonado dentro de cada grupo de hermanos, para que las grillas entren en cascada.
  items.forEach((el) => {
    const siblings = Array.from(el.parentElement?.children ?? []).filter((n) =>
      n.hasAttribute?.('data-reveal')
    )
    el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 5) * 70}ms`)
    observer.observe(el)
  })
}
