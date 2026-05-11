import { createClient } from 'contentful'

const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
})

export const fetchHomePageContent = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'homePage',
      limit: 1,
    })

    if (response.items.length > 0) {
      return response.items[0].fields
    }
    return null
  } catch (error) {
    console.error('Error fetching Contentful data:', error)
    return null
  }
}

export const fetchFacilities = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'facility',
    })
    return response.items.map(item => item.fields)
  } catch (error) {
    console.error('Error fetching facilities:', error)
    return []
  }
}

export const fetchAnnouncements = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'announcement',
      limit: 5,
    })
    return response.items.map(item => item.fields)
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return []
  }
}

export default contentfulClient
