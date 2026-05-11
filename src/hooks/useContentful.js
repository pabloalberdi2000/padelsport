import { useState, useEffect } from 'react'
import { fetchHomePageContent, fetchFacilities, fetchAnnouncements } from '../services/contentfulClient'

export const useHomePageContent = () => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
        const token = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

        if (!spaceId || !token || spaceId === 'dummy') {
          console.warn('Contentful credentials not configured. Using defaults.')
          setContent(null)
          return
        }

        const data = await fetchHomePageContent()
        setContent(data)
      } catch (err) {
        console.warn('Failed to fetch Contentful content:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  return { content, loading, error }
}

export const useFacilities = () => {
  const [facilities, setFacilities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadFacilities = async () => {
      try {
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
        const token = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

        if (!spaceId || !token || spaceId === 'dummy') {
          console.warn('Contentful credentials not configured.')
          setFacilities([])
          return
        }

        const data = await fetchFacilities()
        setFacilities(data)
      } catch (err) {
        console.warn('Failed to fetch facilities:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadFacilities()
  }, [])

  return { facilities, loading, error }
}

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
        const token = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

        if (!spaceId || !token || spaceId === 'dummy') {
          console.warn('Contentful credentials not configured.')
          setAnnouncements([])
          return
        }

        const data = await fetchAnnouncements()
        setAnnouncements(data)
      } catch (err) {
        console.warn('Failed to fetch announcements:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadAnnouncements()
  }, [])

  return { announcements, loading, error }
}
