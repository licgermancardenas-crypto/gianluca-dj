import { tracks, trackFilters } from '../data.js'
import { icons, waveform } from '../icons.js'

const platformIcon = {
  soundcloud: icons.soundcloud,
  spotify: icons.spotify,
  mixcloud: icons.mixcloud
}

const platformLabel = {
  soundcloud: 'SoundCloud',
  spotify: 'Spotify',
  mixcloud: 'Mixcloud'
}

function TrackCard(track) {
  const links = Object.entries(track.links)
    .map(
      ([key, url]) => `
        <a href="${url}" class="track-platform" target="_blank" rel="noopener noreferrer"
           aria-label="${track.title} on ${platformLabel[key]}" title="${platformLabel[key]}">
          ${platformIcon[key]}
        </a>
      `
    )
    .join('')

  return `
    <article class="track card" data-track="${track.id}" data-category="${track.category}" data-reveal
             style="--track-a:${track.gradient[0]};--track-b:${track.gradient[1]}">
      <div class="track-art">
        <span class="track-art-glow" aria-hidden="true"></span>
        <button class="track-play" type="button"
                data-play="${track.id}"
                aria-label="Play ${track.title}"
                aria-pressed="false">
          <span class="track-play-icon track-play-idle">${icons.play}</span>
          <span class="track-play-icon track-play-active">${icons.pause}</span>
        </button>
        <span class="track-category">${track.category}</span>
      </div>

      <div class="track-body">
        <h3 class="track-title">${track.title}</h3>
        <p class="track-meta">${track.meta}</p>

        ${waveform(track.id)}

        <div class="track-footer">
          <span class="track-duration">${track.duration}</span>
          <div class="track-platforms">${links}</div>
        </div>
      </div>
    </article>
  `
}

export function Music() {
  return `
    <section class="section section-music" id="music">
      <div class="container">
        <div class="section-header" data-reveal>
          <span class="section-badge">Music</span>
          <h2 class="section-title">Music &amp; Sets</h2>
          <p class="section-desc">Recent releases, recorded live sets and the monthly Progressive Sessions podcast.</p>
        </div>

        <div class="filters" role="tablist" aria-label="Filter music by type" data-reveal>
          ${trackFilters
            .map(
              (f, i) => `
            <button class="filter" type="button" role="tab"
                    data-filter="${f}"
                    aria-selected="${i === 0}"
                    ${i === 0 ? 'data-active' : ''}>${f === 'All' ? 'All' : `${f}s`}</button>
          `
            )
            .join('')}
        </div>

        <div class="grid grid-3 track-grid" id="track-grid">
          ${tracks.map(TrackCard).join('')}
        </div>

        <p class="music-empty" id="music-empty" hidden>Nothing here yet.</p>
      </div>
    </section>
  `
}
