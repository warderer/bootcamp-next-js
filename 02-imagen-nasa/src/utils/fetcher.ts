const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = '2hKZKWSIe5s0coMjykmbfYUAczcheC2FCf2q53o9'

const fetcher = async (queryParams?: string) => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? `&${queryParams}` : ''}`)
    const data = await response.json()
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default fetcher
