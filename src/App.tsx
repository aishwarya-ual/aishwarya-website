// import React from 'react';
import './globe.css';
import MyClock from "./MyClock";
import ReactGlobe from 'react-globe.gl';
import 'react-clock/dist/Clock.css';
import Clock from "react-clock";
import './Clock.css';
import React, {useEffect, useState} from 'react';

// defining a new type 'ClockInfo' - which is an object with two properties (tz, address)
type ClockInfo = {
    timezone: string,
    address: string;
}
// creating a function which is a react component called 'App' .
// a react component is a function which returns html.
// object - anything in curly brackets.
function App() {
    // setting three unchangeable variables.
    // state - something a react component has that can be updated live in app.
    // useState - way of accessing the state; adds a new property to the state object + allows
    // you to give it a type and an initial value.
    // what useState returns - the value in there (new Date) + a function for updating that value.
    // we want to assign each of these returns a variable so as to use them separately.
    // date - variable for accessing the state, setDate - function for altering it
    const [date, setDate] = useState<Date>(new Date())
    //current clock state - which clock was last clicked to know which clock to update
    const [currentClock, setCurrentClock] = useState<number>(0)
    //ClockInfo contains timezone and address, and we are creating a list of ClockInfos (for each of the 5 clocks).
    const [timeZones, setTimezones ] = useState<ClockInfo[]>([
        {timezone: 'Europe/London', address: 'United Kingdom'},
        {timezone: 'Europe/London', address: 'United Kingdom'},
        {timezone: 'Europe/London', address: 'United Kingdom'},
        {timezone: 'Europe/London', address: 'United Kingdom'},
        {timezone: 'Europe/London', address: 'United Kingdom'}
    ]);
    // instead of updating a state, useEffect monitors states and runs a piece of code if a state updates.
    useEffect(() => {
        //fetch - fetches from the backend
        fetch("http://localhost:8080/find", {
            // headers - labels attached to a request, that give you info (here, content type and origin) about said request.
            headers: {
                //
                'Content-Type': 'application/json',
                // this is the origin of the request (front end)
                Origin: "http://localhost:3000/"
            },

        }
        )
            // waits for fetch to complete before doing stuff
            .then((response) => {
                // body of the request in json format
                // .json returns a promise -> that what we need (json) will be returned

                response.json()
                    // then is a method on a promise instructing what to do once the promise is fulfilled.
                    .then(json => {
                        // what we are doing w the json that has been fetched.
                        // mapping the list of json objects (e.g. id, lat, long) received from the back-end to ClockInfo.
                        const fetchedClocks: ClockInfo[] = json.map((fullInfo: any) => {
                            // mapping the fullInfo onto the ClockInfo.
                            return {
                                address: fullInfo.address,
                                timezone: fullInfo.timezone
                            }
                        });
                        // fill fetched clocks up to five and set a default uk time
                        while (fetchedClocks.length < 5) {
                            fetchedClocks.push({timezone: 'Europe/London', address: 'United Kingdom'});
                        }
                        //setting the timezones to that of the fetched clocks
                        setTimezones(fetchedClocks);
                    })
            } )

        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const getTimezone = (coords: {lat: number, lng: number}, event: MouseEvent) => {
        console.log(coords);
        console.log(timeZones);
        fetch("http://localhost:8080/time", {
            headers: {
                'Content-Type': 'application/json',
                Origin: "http://localhost:3000/"
            },
            method: "POST",
            body: JSON.stringify({
                lat: coords.lat,
                long: coords.lng,

            })
        })
            .then(response => {
                response.json()
                    .then(body => {
                        console.log(body);
                        const temp: ClockInfo[] = timeZones;
                        temp[currentClock] = body
                        setTimezones(temp);
                    });
            });

    }

return (

        <div className="App">

            <body>

            <header className="App-header">

                <div className={"clockClass"}>
                    <MyClock timezone={timeZones[0].timezone} address={timeZones[0].address} date={date} onClick={() => {
                        setCurrentClock(0)
                    }}/>
                    <MyClock timezone={timeZones[1].timezone} address={timeZones[1].address} date={date} onClick={() => {
                        setCurrentClock(1)
                    }}/>
                    <MyClock timezone={timeZones[2].timezone} address={timeZones[2].address} date={date} onClick={() => {
                        setCurrentClock(2)
                    }}/>
                    <MyClock timezone={timeZones[3].timezone} address={timeZones[3].address} date={date} onClick={() => {
                        setCurrentClock(3)
                    }}/>
                    <MyClock timezone={timeZones[4].timezone} address={timeZones[4].address} date={date} onClick={() => {
                        setCurrentClock(4)
                    }}/>

                </div>

                <div className={"globeClass"}>

                    <ReactGlobe
                        globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        showGlobe
                        showAtmosphere
                        atmosphereAltitude={0.2}
                        atmosphereColor={"lightskyblue"}
                        onGlobeClick={getTimezone}
                        width={2000}
                        height={720}
                    />

                </div>

            </header>


            </body>
        </div>

    );
}

export default App;
