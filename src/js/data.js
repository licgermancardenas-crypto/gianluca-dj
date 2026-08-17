// Contenido del sitio. Todo placeholder salvo nombre/ciudad — reemplazar con datos reales.

export const site = {
  name: 'GIAN SEQUEIRA',
  first: 'GIAN',
  last: 'SEQUEIRA',
  tagline: 'Progressive House Session',
  location: 'Rosario',
  email: 'bookings@giansequeira.com',
  year: 2026
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'music', label: 'Music' },
  { id: 'events', label: 'Events' },
  { id: 'booking', label: 'Booking' }
]

export const bio = [
  'Gian Sequeira is a DJ and producer from Rosario, Argentina, whose sets live in the long, patient stretch of progressive house — the part of the night where a groove stops being a track and starts being a place.',
  'What began as bedroom experiments with borrowed decks turned into residencies across the Litoral circuit and, eventually, into original productions built around warm analog pads, hypnotic basslines and the kind of restraint that makes a drop land harder for having waited.',
  'His influences run from the melodic architecture of Sasha and Hernán Cattáneo to the darker, dubbier end of Bedrock — but the through-line is always atmosphere first. Every set is written as an arc, not a playlist.'
]

export const stats = [
  { value: '8+', label: 'Years behind the decks' },
  { value: '120', label: 'Sets played' },
  { value: '14', label: 'Original releases' },
  { value: '30k', label: 'Streams' }
]

// gradient: par de tonos usados por la portada generada del track
export const tracks = [
  {
    id: 'nebula-drift',
    title: 'Nebula Drift',
    category: 'Track',
    meta: 'Original Mix',
    duration: '7:42',
    gradient: ['#1e88e5', '#0d2a52'],
    links: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'brick-and-neon',
    title: 'Brick & Neon',
    category: 'Track',
    meta: 'Original Mix',
    duration: '6:18',
    gradient: ['#d97736', '#4a1f0c'],
    links: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'rosario-nights-04',
    title: 'Rosario Nights 04',
    category: 'Live Set',
    meta: 'Metropolis Club — Nov 2025',
    duration: '1:24:00',
    gradient: ['#1e88e5', '#3a1a4a'],
    links: { soundcloud: '#', mixcloud: '#' }
  },
  {
    id: 'deep-current',
    title: 'Deep Current',
    category: 'Live Set',
    meta: 'Costanera Sunset',
    duration: '58:30',
    gradient: ['#0f5f7a', '#0d1b2a'],
    links: { soundcloud: '#', mixcloud: '#' }
  },
  {
    id: 'progressive-sessions-11',
    title: 'Progressive Sessions 11',
    category: 'Podcast',
    meta: 'Monthly residency',
    duration: '1:02:15',
    gradient: ['#d97736', '#7a2f0f'],
    links: { spotify: '#', mixcloud: '#' }
  },
  {
    id: 'progressive-sessions-10',
    title: 'Progressive Sessions 10',
    category: 'Podcast',
    meta: 'Guest: TBA',
    duration: '1:05:40',
    gradient: ['#5a3a8a', '#1a1030'],
    links: { spotify: '#', mixcloud: '#' }
  }
]

export const trackFilters = ['All', 'Track', 'Live Set', 'Podcast']

export const events = [
  {
    day: '15',
    month: 'Oct',
    year: '2026',
    venue: 'Metropolis Club',
    city: 'Rosario, AR',
    detail: 'Progressive Sessions — Residency Night',
    action: { label: 'Get Tickets', url: '#', kind: 'tickets' }
  },
  {
    day: '02',
    month: 'Nov',
    year: '2026',
    venue: 'Cosmic Arena',
    city: 'Buenos Aires, AR',
    detail: 'Deep Horizons Festival — Sunset Stage',
    action: { label: 'Get Tickets', url: '#', kind: 'tickets' }
  },
  {
    day: '22',
    month: 'Nov',
    year: '2026',
    venue: 'Club Paraná',
    city: 'Santa Fe, AR',
    detail: 'Open-air b2b showcase',
    action: { label: 'RSVP', url: '#', kind: 'rsvp' }
  },
  {
    day: '13',
    month: 'Dec',
    year: '2026',
    venue: 'Metropolis Club',
    city: 'Rosario, AR',
    detail: 'Year Closing — 6h extended set',
    action: { label: 'Sold Out', url: null, kind: 'soldout' }
  }
]

export const eventTypes = [
  'Club night',
  'Festival',
  'Private event',
  'Corporate',
  'Radio / Podcast guest',
  'Other'
]

export const socials = [
  { id: 'instagram', label: 'Instagram', url: '#' },
  { id: 'soundcloud', label: 'SoundCloud', url: '#' },
  { id: 'spotify', label: 'Spotify', url: '#' },
  { id: 'mixcloud', label: 'Mixcloud', url: '#' }
]
