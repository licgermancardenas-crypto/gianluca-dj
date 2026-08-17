import { site, nav } from '../data.js'
import { icons } from '../icons.js'

export function Header() {
  return `
    <header class="header" id="header">
      <div class="container header-inner">
        <a href="#home" class="logo" data-scroll>
          <span class="logo-mark">GS</span>
          <span class="logo-text">${site.name}</span>
        </a>

        <nav class="nav" id="nav" aria-label="Main">
          ${nav
            .map(
              (item) => `
            <a href="#${item.id}" data-scroll data-nav="${item.id}">${item.label}</a>
          `
            )
            .join('')}
        </nav>

        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
          <span class="nav-toggle-open">${icons.menu}</span>
          <span class="nav-toggle-close">${icons.close}</span>
        </button>
      </div>
    </header>
  `
}
