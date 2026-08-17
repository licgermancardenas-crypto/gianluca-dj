import { site, eventTypes, socials } from '../data.js'
import { icons } from '../icons.js'

export function Booking() {
  return `
    <section class="section section-booking" id="booking">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-badge">Booking</span>
          <h2 class="section-title">Booking &amp; Contact</h2>
          <p class="section-desc">Clubs, festivals and private events. Tell me the room and the hour — I'll build the arc.</p>
        </div>

        <div class="booking-grid">
          <form class="booking-form card" id="booking-form" novalidate data-reveal>
            <div class="field-row">
              <div class="field">
                <label for="bf-name">Name</label>
                <input type="text" id="bf-name" name="name" autocomplete="name" required placeholder="Your name">
                <span class="field-error" data-error-for="bf-name"></span>
              </div>

              <div class="field">
                <label for="bf-email">Email</label>
                <input type="email" id="bf-email" name="email" autocomplete="email" required placeholder="you@example.com">
                <span class="field-error" data-error-for="bf-email"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="bf-type">Event type</label>
                <select id="bf-type" name="eventType" required>
                  <option value="" selected disabled>Select one…</option>
                  ${eventTypes.map((t) => `<option value="${t}">${t}</option>`).join('')}
                </select>
                <span class="field-error" data-error-for="bf-type"></span>
              </div>

              <div class="field">
                <label for="bf-date">Date</label>
                <input type="date" id="bf-date" name="date" required>
                <span class="field-error" data-error-for="bf-date"></span>
              </div>
            </div>

            <div class="field">
              <label for="bf-message">Message</label>
              <textarea id="bf-message" name="message" rows="5" required
                        placeholder="Venue, capacity, set length, budget range…"></textarea>
              <span class="field-error" data-error-for="bf-message"></span>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              Request Booking
              ${icons.arrowRight}
            </button>

            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </form>

          <aside class="booking-aside" data-reveal>
            <div class="booking-card card">
              <h3 class="booking-card-title">Direct</h3>
              <a href="mailto:${site.email}" class="booking-email">${site.email}</a>
              <p class="booking-note">Replies within 48h. For festival routing, include the full run of dates.</p>
            </div>

            <div class="booking-card card">
              <h3 class="booking-card-title">Follow</h3>
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

            <div class="booking-card card booking-card-tech">
              <h3 class="booking-card-title">Tech rider</h3>
              <ul class="rider-list">
                <li>${icons.check} 2× Pioneer CDJ-3000</li>
                <li>${icons.check} 1× DJM-900NXS2</li>
                <li>${icons.check} Booth monitor + XLR out</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `
}
