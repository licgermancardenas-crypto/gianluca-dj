import { bio, stats, site } from '../data.js'

export function About() {
  return `
    <section class="section section-about" id="about">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-badge">About</span>
          <h2 class="section-title">About Gian</h2>
          <p class="section-desc">Atmosphere first. Every set written as an arc, not a playlist.</p>
        </div>

        <div class="about-grid">
          <div class="about-media" data-reveal>
            <div class="about-photo">
              <img src="/img/dj-decks.jpg" alt="Gian Sequeira performing behind the decks" loading="lazy" decoding="async">
            </div>
            <div class="about-photo about-photo-inset">
              <img src="/img/dj-portrait.jpg" alt="" loading="lazy" decoding="async">
            </div>
            <span class="about-frame" aria-hidden="true"></span>
          </div>

          <div class="about-body" data-reveal>
            ${bio.map((p) => `<p>${p}</p>`).join('')}

            <dl class="stats">
              ${stats
                .map(
                  (s) => `
                <div class="stat">
                  <dt class="stat-value">${s.value}</dt>
                  <dd class="stat-label">${s.label}</dd>
                </div>
              `
                )
                .join('')}
            </dl>

            <p class="about-signature">
              Based in ${site.location}, Argentina — available worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
}
