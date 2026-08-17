// SVG inline. Todos heredan currentColor y escalan con font-size vía width/height 1em donde aplica.

const svg = (body, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`

const solid = (body) =>
  `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${body}</svg>`

export const icons = {
  play: solid('<path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z"/>'),

  pause: solid('<path d="M7 4h3.2v16H7zM13.8 4H17v16h-3.2z"/>'),

  arrowRight: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),

  arrowDown: svg('<path d="M12 5v14M6 13l6 6 6-6"/>'),

  calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),

  pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),

  ticket: svg('<path d="M4 8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a2.5 2.5 0 0 0 0 5v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a2.5 2.5 0 0 0 0-5Z"/><path d="M14 5v3M14 12v3"/>'),

  check: svg('<path d="M20 6 9 17l-5-5"/>'),

  menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),

  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),

  instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>'),

  spotify: solid(
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.44 14.44a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03Zm1.19-2.65a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.54-1.79c4.36-1.32 9.78-.68 13.49 1.6.44.27.58.85.31 1.28Zm.1-2.76C14.6 8.73 8.4 8.53 4.9 9.59a1.12 1.12 0 1 1-.65-2.15c4.02-1.22 10.87-.98 15.16 1.57a1.12 1.12 0 1 1-1.14 1.93l-.54-.31Z"/>'
  ),

  soundcloud: solid(
    '<path d="M2.2 13.1c-.1 0-.18.07-.19.17l-.2 1.9.2 1.86c.01.1.09.17.19.17s.18-.07.19-.17l.23-1.86-.23-1.9c-.01-.1-.09-.17-.19-.17Zm1.42-.9c-.11 0-.2.08-.21.19l-.26 2.78.26 2.68c.01.11.1.19.21.19s.2-.08.21-.19l.3-2.68-.3-2.78c-.01-.11-.1-.19-.21-.19Zm1.5-.63c-.13 0-.23.1-.24.22l-.25 3.38.25 3.24c.01.13.11.22.24.22.12 0 .22-.1.24-.22l.28-3.24-.28-3.38c-.02-.13-.12-.22-.24-.22Zm1.54-.28c-.14 0-.26.11-.27.25l-.23 3.64.23 3.5c.01.14.13.25.27.25s.25-.11.27-.25l.26-3.5-.26-3.64c-.02-.14-.13-.25-.27-.25Zm1.57.16c-.16 0-.28.12-.3.28l-.21 3.46.21 3.44c.02.16.14.28.3.28.15 0 .28-.12.29-.28l.24-3.44-.24-3.46c-.01-.16-.14-.28-.29-.28Zm1.6-1.9c-.17 0-.31.14-.32.31l-.2 5.33.2 3.4c.01.17.15.31.32.31s.31-.14.32-.31l.22-3.4-.22-5.33c-.01-.17-.15-.31-.32-.31Zm1.63-.72c-.19 0-.34.15-.35.34l-.18 6.02.18 3.36c.01.19.16.34.35.34s.34-.15.35-.34l.2-3.36-.2-6.02c-.01-.19-.16-.34-.35-.34Zm1.7-.38c-.2 0-.37.16-.38.37l-.16 6.37.16 3.32c.01.2.18.36.38.36s.36-.16.38-.36l.18-3.32-.18-6.37c-.02-.2-.18-.37-.38-.37Zm1.75 8.2v-.02.02Zm.9-8.68c-.1 0-.2.02-.29.05-.2-2.3-2.13-4.1-4.48-4.1-.58 0-1.14.11-1.63.31-.19.08-.24.16-.24.31v12.06c0 .16.12.29.28.31h6.36a3.1 3.1 0 1 0 0-6.2l-.14.02c.09-.24.14-.5.14-.77 0-1.1-.9-2-2-2Z"/>'
  ),

  mixcloud: solid(
    '<path d="M20.5 13.4a4.06 4.06 0 0 0-3.88-4.05 5.72 5.72 0 0 0-10.6-1.2A4.35 4.35 0 0 0 2 12.44v.13c0 .3.24.53.53.53H7.6c.3 0 .53-.24.53-.53v-.13c0-.16.13-.29.29-.29h1.53c.16 0 .29.13.29.29v3.18c0 .3.24.53.53.53h9.1c.3 0 .53-.24.53-.53v-2.2Zm-16.3-.8a2.75 2.75 0 0 1 2.06-2.34l.62-.16.14-.63a4.12 4.12 0 0 1 7.85-.53l.24.63.67-.06h.15a2.46 2.46 0 0 1 2.42 2.45v1.4h-6.7v-1.58a1.9 1.9 0 0 0-1.89-1.89H8.42a1.9 1.9 0 0 0-1.86 1.55l-.03.24v.92H4.2v-.02Z"/>'
  )
}

// Onda de audio determinística: mismas barras para el mismo id.
export function waveform(seed, bars = 44) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0

  const rand = () => {
    h = (h * 1664525 + 1013904223) >>> 0
    return h / 4294967296
  }

  const cells = Array.from({ length: bars }, (_, i) => {
    // envolvente suave para que la onda no sea ruido plano
    const envelope = 0.45 + 0.55 * Math.sin((i / (bars - 1)) * Math.PI)
    const height = Math.round((0.18 + rand() * 0.82) * envelope * 100)
    return `<span class="wave-bar" style="--h:${Math.max(8, height)}%;--i:${i}"></span>`
  })

  return `<span class="wave" aria-hidden="true">${cells.join('')}</span>`
}
