import { events } from '../data.js'
import { icons } from '../icons.js'

function EventRow(ev) {
  const soldOut = ev.action.kind === 'soldout'

  const action = soldOut
    ? `<span class="btn btn-ghost is-disabled" aria-disabled="true">${ev.action.label}</span>`
    : `<a href="${ev.action.url}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
         ${icons.ticket}
         ${ev.action.label}
       </a>`

  return `
    <li class="event ${soldOut ? 'is-soldout' : ''}" data-reveal>
      <span class="event-node" aria-hidden="true"></span>

      <div class="event-date">
        <span class="event-day">${ev.day}</span>
        <span class="event-month">${ev.month}</span>
        <span class="event-year">${ev.year}</span>
      </div>

      <div class="event-info">
        <h3 class="event-venue">${ev.venue}</h3>
        <p class="event-city">${icons.pin} ${ev.city}</p>
        <p class="event-detail">${ev.detail}</p>
      </div>

      <div class="event-action">${action}</div>
    </li>
  `
}

export function Events() {
  return `
    <section class="section section-events" id="events">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-badge">Events</span>
          <h2 class="section-title">Upcoming Dates</h2>
          <p class="section-desc">Where to catch the next session.</p>
        </div>

        <ol class="timeline">
          ${events.map(EventRow).join('')}
        </ol>

        <p class="events-note" data-reveal>
          ${icons.calendar}
          Booking a date outside this list? <a href="#booking" data-scroll>Send a request</a>.
        </p>
      </div>
    </section>
  `
}
