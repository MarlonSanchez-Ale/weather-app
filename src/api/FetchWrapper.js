import { useState, useEffect } from "react"
import axios from "axios"

export const useGetWeather = (city) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5c7e57c8c139ec200388bb5246916f38`)
            .then((res) => {
                setIsLoading(false)
                setData(res.data)
            })
            .catch((error) => {
                setError(error)
            })
    }, [city])

    return { data, isLoading, error }
}

export const useGetCity = (city) => {
    const [cityData, setCityData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(null)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase()}/images/`)
            .then((res) => {
                setLoading(false)
                setCityData(res.data.photos[0].image)
            })
            .catch((error) => {
                setIsError(error)
            })
    }, [city])

    return { cityData, loading, isError }
}