import { site } from '../data.js'
import { icons } from '../icons.js'

export function Hero() {
  return `
    <section class="hero" id="home">
      <div class="hero-bg" aria-hidden="true">
        <div class="hero-brick"></div>
        <div class="hero-cosmos"></div>
        <div class="hero-stars"></div>
        <div class="hero-glow hero-glow-amber"></div>
        <div class="hero-glow hero-glow-cyan"></div>
      </div>

      <div class="hero-photo" aria-hidden="true">
        <img src="/img/dj-portrait.jpg" alt="" loading="eager" fetchpriority="high" decoding="async">
      </div>

      <div class="container hero-inner">
        <div class="hero-content">
          <p class="hero-eyebrow">
            <span class="pulse-dot"></span>
            DJ &amp; Producer
          </p>

          <h1 class="hero-title">
            <span class="hero-title-line">${site.first}</span>
            <span class="hero-title-line">${site.last}</span>
          </h1>

          <p class="hero-subtitle">${site.tagline}</p>

          <p class="hero-location">
            <span class="hero-rule"></span>
            ${site.location}
          </p>

          <div class="hero-actions">
            <a href="#music" class="btn btn-primary" data-scroll>
              ${icons.play}
              Listen Now
            </a>
            <a href="#booking" class="btn btn-outline" data-scroll>
              Book Gian
              ${icons.arrowRight}
            </a>
          </div>
        </div>
      </div>

      <a href="#about" class="hero-scroll" data-scroll aria-label="Scroll to about section">
        <span>Scroll</span>
        ${icons.arrowDown}
      </a>
    </section>
  `
}
