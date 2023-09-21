import { useState, useEffect } from "react"
import SearchCity from "../elements/SearchCity";
import WeatherList from "../elements/WeatherList";

export default function Weather() {

    const [city, setCity] = useState('Managua');
    
    return (
        <div className="p-10">
            <div className="flex flex-col justify-center gap-3">
                <h1 className="text-3xl font-bold underline text-gray-200">
                    Hello world!
                </h1>
                <p className="text-xl font-light text-gray-300">
                    Drei Weieren is an oasis of peace in the middle of St.Gallen.
                </p>
            </div>
            <SearchCity value={city} setValue={setCity} />
            <WeatherList city={city} />
        </div>
    )
}
