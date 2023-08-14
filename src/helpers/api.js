export const BASE_URL = 'http://192.168.1.81:8000'

const handleResponse = async (response) => {
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    let errorMessage = 'Ошибка при выполнении запроса'
    
    try {
      const errorData = await response.json()
      if (errorData.message) {
        errorMessage = errorData.message
      }
    } catch (error) {
      console.error(error)
    }
    
    throw new Error(errorMessage)
  }
}

export const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options)
    return handleResponse(response)
  } catch (error) {
    console.error(error)
    throw error
  }
}
