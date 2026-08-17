import { site, nav, socials } from '../data.js'
import { icons } from '../icons.js'

export function Footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="logo">
              <span class="logo-mark">GS</span>
              <span class="logo-text">${site.name}</span>
            </span>
            <p>${site.tagline} — ${site.location}, Argentina. Long-form progressive house built for the deep end of the night.</p>
          </div>

          <div>
            <h4 class="footer-title">Explore</h4>
            <ul class="footer-links">
              ${nav.map((n) => `<li><a href="#${n.id}" data-scroll>${n.label}</a></li>`).join('')}
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Listen</h4>
            <ul class="footer-links">
              ${socials
                .filter((s) => s.id !== 'instagram')
                .map(
                  (s) =>
                    `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`
                )
                .join('')}
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Contact</h4>
            <ul class="footer-links">
              <li><a href="mailto:${site.email}">${site.email}</a></li>
              <li><a href="#booking" data-scroll>Booking form</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; ${site.year} ${site.name} MUSIC</span>
          <div class="social-links">
            ${socials
              .map(
                (s) => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}">
                ${icons[s.id]}
              </a>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    </footer>
  `
}
