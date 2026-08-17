# Gian Sequeira — Progressive House Session

Single-page portfolio site for DJ/producer Gian Sequeira (Rosario, AR).

Vanilla JS + Vite, no framework. Dark cyber/atmospheric look: brick texture,
cosmic nebula, amber + cyan accents.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # sirve dist/
```

## Structure

```
src/
  index.html            meta, fonts, favicon
  main.js               entry: css + app
  js/
    data.js             TODO CONTENIDO — bio, tracks, events, socials, email
    app.js              render + wiring
    icons.js            SVG inline + generador de waveform
    nav.js              smooth scroll, scrollspy, header state, menú mobile
    reveal.js           fade-in on scroll (IntersectionObserver)
    player.js           player SIMULADO (ver abajo)
    filters.js          filtro de la grilla de música
    form.js             validación del form de booking
    components/         header, hero, about, music, events, booking, footer
  styles/
    main.css            tokens, reset, tipografía, botones, header, footer, form
    sections.css        hero, about, music, events, booking
public/img/
  dj-portrait.jpg       hero (recortado del original para sacar el logo quemado)
  dj-decks.jpg          about
```

## Design tokens

| Token      | Valor     | Uso                          |
| ---------- | --------- | ---------------------------- |
| `--bg`     | `#0d0d11` | fondo base                   |
| `--amber`  | `#d97736` | acento primario, CTAs        |
| `--cyan`   | `#1e88e5` | acento secundario, hovers    |
| `--fg`     | `#f4f4f6` | texto                        |

Tipografías: Orbitron (display/headings), Space Grotesk (body).

## Pendientes antes de publicar

Todo lo de abajo está como placeholder y hay que reemplazarlo con datos reales.

1. **Contenido** — `src/js/data.js`: bio, stats, tracks, fechas, email y URLs de
   redes están inventados. Los links de SoundCloud/Spotify/Mixcloud son `#`.
2. **Player** — `src/js/player.js` no reproduce audio: anima la onda y una barra
   de progreso. Reemplazar `start`/`stop` por el widget de SoundCloud o el
   embed de Spotify.
3. **Form de booking** — `src/js/form.js` valida y muestra confirmación, pero no
   envía nada. Conectar Formspree / Netlify Forms / endpoint propio en
   `submitBooking()`.
4. **Fotos** — las dos imágenes salen de un screenshot de 442×363 px, recortado
   y reescalado. Se ven blandas en pantallas grandes. Conseguir los originales.
5. **Idioma** — todo el copy está en inglés (`lang="en"`), siguiendo el mockup.
   Si el público es local, hay que traducirlo.
