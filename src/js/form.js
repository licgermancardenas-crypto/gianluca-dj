// Validación del formulario de booking. NO hay backend todavía: el submit sólo
// valida y muestra confirmación. Para recibir los mensajes, conectar Formspree,
// Netlify Forms o un endpoint propio en `submitBooking`.

const messages = {
  name: 'Tell me who you are.',
  email: 'A valid email so I can reply.',
  eventType: 'Pick the kind of event.',
  date: 'When is it?',
  message: 'A couple of lines about the night.'
}

function fieldError(input, text) {
  const slot = document.querySelector(`[data-error-for="${input.id}"]`)
  if (slot) slot.textContent = text ?? ''
  input.classList.toggle('is-invalid', Boolean(text))
  input.setAttribute('aria-invalid', String(Boolean(text)))
}

function validate(input) {
  const value = input.value.trim()

  if (!value) return messages[input.name] ?? 'Required.'
  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
    return messages.email
  if (input.name === 'message' && value.length < 10)
    return 'A little more detail, please.'
  if (input.type === 'date' && new Date(value) < new Date(new Date().toDateString()))
    return 'Pick a date in the future.'

  return null
}

async function submitBooking(data) {
  // TODO: reemplazar por el POST real cuando haya endpoint.
  console.info('[booking] payload', data)
  await new Promise((resolve) => setTimeout(resolve, 700))
}

export function initForm() {
  const form = document.getElementById('booking-form')
  const status = document.getElementById('form-status')
  if (!form) return

  const inputs = [...form.querySelectorAll('input, select, textarea')]

  inputs.forEach((input) => {
    input.addEventListener('blur', () => fieldError(input, validate(input)))
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) fieldError(input, validate(input))
    })
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const errors = inputs.filter((input) => {
      const error = validate(input)
      fieldError(input, error)
      return error
    })

    if (errors.length) {
      status.textContent = 'Check the highlighted fields.'
      status.className = 'form-status is-error'
      errors[0].focus()
      return
    }

    const button = form.querySelector('button[type="submit"]')
    button.disabled = true
    status.textContent = 'Sending…'
    status.className = 'form-status'

    try {
      await submitBooking(Object.fromEntries(new FormData(form)))
      form.reset()
      status.textContent = 'Request sent. You will hear back within 48h.'
      status.className = 'form-status is-success'
    } catch {
      status.textContent = 'Something went wrong. Email bookings@giansequeira.com instead.'
      status.className = 'form-status is-error'
    } finally {
      button.disabled = false
    }
  })
}
