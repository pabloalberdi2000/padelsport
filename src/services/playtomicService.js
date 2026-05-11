export const getPlaytomicBookingUrl = () => {
  return import.meta.env.VITE_PLAYTOMIC_CLUB_URL || '#'
}

export const openPlaytomicBooking = () => {
  const url = getPlaytomicBookingUrl()
  if (url !== '#') {
    window.open(url, '_blank')
  }
}

export const embedPlaytomicWidget = (containerId) => {
  const url = getPlaytomicBookingUrl()
  if (url !== '#') {
    const container = document.getElementById(containerId)
    if (container) {
      container.innerHTML = `<iframe src="${url}" width="100%" height="600" frameborder="0" allowfullscreen></iframe>`
    }
  }
}
