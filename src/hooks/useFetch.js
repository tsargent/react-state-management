import {useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = url => {
  const [response, setResponse] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
      .then((response) => {
        setIsLoading(false)
        setResponse(response)
      })
      .catch((error) => {
        setIsError(true)
      })
  }, [url])
  return { isLoading, isError, response}
}

export default useFetch
