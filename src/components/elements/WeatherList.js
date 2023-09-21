import React from 'react'
import { useGetWeather } from '../../api/FetchWrapper';
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm } from 'react-icons/io'
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs'
import { Typography } from "@material-tailwind/react";

export default function WeatherList({ city }) {

    const { data, isLoading, error } = useGetWeather(city)

    let icon;
    let imageWeather;




    if (data) {
        switch (data.weather[0].main) {
            case 'Clouds':
                icon = <IoMdCloudy size={40} />
                imageWeather = "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1870&q=80"
                break;
            case 'Haze':
                icon = <BsCloudHaze2Fill size={40} />
                imageWeather = "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
                break;
            case 'Rain':
                icon = <IoMdRainy size={40} />
                imageWeather = "https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                break;
            case 'Clear':
                icon = <IoMdSunny size={40} />
                imageWeather = "https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                break;
            case 'Drizzle':
                icon = <BsCloudDrizzleFill size={40} />
                imageWeather = "https://images.unsplash.com/photo-1558112514-951987232931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                break;
            case 'Snow':
                icon = <IoMdSnow size={40} />
                imageWeather = "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                break;
            case 'Thunderstorm':
                icon = <IoMdThunderstorm size={40} />
                imageWeather = "https://images.unsplash.com/photo-1561553590-267fc716698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80"
                break;
            default:
                break;
        }

    }


    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }




    return (
        <div className='flex flex-col justify-center mt-10'>
            <figure className="relative h-96 w-full bg-gray-900 rounded-lg bg-transparent">
                <img
                    className="img h-full w-full rounded-xl object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={imageWeather ? imageWeather : "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"}
                    alt=""
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    {data && (
                        <>
                            <div>
                                <span>{icon}</span>
                                <Typography variant="h5" color="blue-gray">
                                    {data.main.temp} °C
                                </Typography>
                                <Typography color="gray" className="mt-2 font-normal">
                                    {data.name}, {data.sys.country}
                                </Typography>
                            </div>
                            <div className='flex flex-row justify-center gap-3'>
                                <div className='flex flex-col justify-center gap-3'>
                                    <Typography variant="h5" color="blue-gray">
                                        Visibility
                                    </Typography>
                                    <Typography color="gray" className="mt-2 font-normal">
                                        {Number(data.visibility) / 1000} Km
                                    </Typography>
                                </div>
                                <div className='flex flex-col justify-center gap-3'>
                                    <Typography variant="h5" color="blue-gray">
                                        Humidity
                                    </Typography>
                                    <Typography color="gray" className="mt-2 font-normal">
                                        {data.main.humidity} %
                                    </Typography>
                                </div>
                                <div className='flex flex-col justify-center gap-3'>
                                    <Typography variant="h5" color="blue-gray">
                                        Wind
                                    </Typography>
                                    <Typography color="gray" className="mt-2 font-normal">
                                        {data.wind.speed} m/s
                                    </Typography>
                                </div>
                            </div>
                        </>
                    )}
                </figcaption>
            </figure>
        </div>
    )
}

/*

 {data && (
                <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
                    <Col numColSpan={1} numColSpanLg={2} className='h-96'>
                        <Card className={cityData ? "bg-[url('https://d13k13wj6adfdf.cloudfront.net/urban_areas/managua-f2637ab6ef.jpg')] bg-cover bg-transparent bg-opacity-5 h-full" : 'bg-white' }>
                            <Text>Tem</Text>
                            <Title>{icon}</Title>
                            <Metric>{data.main.temp} °C</Metric>
                            <div className='grid place-items-end'>
                                <Text>City</Text>
                                <Metric>{data.name}, {data.sys.country}</Metric>
                            </div>
                        </Card>
                    </Col>
                    <Card>
                        <Text>Visibility</Text>
                        <Metric>{Number(data.visibility) / 1000} Km</Metric>

                    </Card>
                    <Col>
                        <Card>
                            <Text>Humidity</Text>
                            <Metric>{data.main.humidity} %</Metric>
                        </Card>
                    </Col>
                    <Card>
                        <Text>Feels Like</Text>
                        <Metric>{data.main.feels_like} %</Metric>
                    </Card>
                    <Card>
                        <Text>Wind</Text>
                        <Metric>{data.wind.speed} m/s</Metric>
                    </Card>
                </Grid>
            )}
*/