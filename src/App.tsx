// import React from 'react';
import './globe.css';
import MyClock from "./MyClock";
import ReactGlobe from 'react-globe.gl';
import 'react-clock/dist/Clock.css';
import './Clock.css';
import React, {useEffect, useState} from 'react';
import {findAllClocks, getTimezone} from "./libs/ClockAPI";

// defining a new type 'ClockInfo' - which is an object with two properties (tz, address)
export type ClockInfo = {
    timezone: string,
    address: string,
    lat: number,
    long: number,
    id?: string
}

// creating a function which is a React component called 'App' .
// a React component is a function which returns html.
// object - anything in curly brackets.

function App() {
    // setting three unchangeable variables.
    // state - something a React component has that can be updated live in app.
    // useState - way of accessing the state; adds a new property to the state object + allows
    // you to give it a type and an initial value.
    // what useState returns - the value in there (new Date) + a function for updating that value.
    // we want to assign each of these returns a variable to use them separately.
    // date - variable for accessing the state, setDate - function for altering it
    const [date, setDate] = useState<Date>(new Date())
    //current clock state - which clock was last clicked to know which clock to update
    const [currentClock, setCurrentClock] = useState<number>(-1)
    //ClockInfo contains timezone and address, and we are creating a list of ClockInfos (for each of the 5 clocks).
    const [timeZones, setTimezones] = useState<ClockInfo[]>([
        {timezone: 'Europe/London', address: 'United Kingdom', lat: 51.48, long: 0.0015},
        {timezone: 'Europe/London', address: 'United Kingdom', lat: 51.48, long: 0.0015},
        {timezone: 'Europe/London', address: 'United Kingdom', lat: 51.48, long: 0.0015},
        {timezone: 'Europe/London', address: 'United Kingdom', lat: 51.48, long: 0.0015},
        {timezone: 'Europe/London', address: 'United Kingdom', lat: 51.48, long: 0.0015},

    ]);


    function setTimeZone({lat, lng}: { lat: number, lng: number }, event: MouseEvent) {
        getTimezone({lat, lng}, event).then(response => {
            response.json().then(responseBody => {
                const temp = timeZones;
                temp[currentClock] = {
                    id: timeZones[currentClock].id,
                    timezone: responseBody.timezone,
                    address: responseBody.address,
                    lat: lat,
                    long: lng
                }
                setTimezones(temp);
            })
        })
            //using brain
            .then(() => {
                setCurrentClock(-1);
            })

    }

    const updateClockInfo = (): any => {
        findAllClocks().then((response) => {
            // body of the request in json format
            // .json returns a promise -> that what we need (json) will be returned

            response.json()
                // then is a method on a promise instructing what to do once the promise is fulfilled.
                .then((fetchedClocks: ClockInfo[]) => {
                    // what we are doing w the json that has been fetched.

                    // fill fetched clocks up to five and set a default uk time
                    while (fetchedClocks.length < 5) {
                        fetchedClocks.push({
                            timezone: 'Europe/London',
                            address: 'United Kingdom',
                            lat: 51.48,
                            long: 0.0015
                        });
                    }
                    //setting the timezones to that of the fetched clocks
                    setTimezones(fetchedClocks);
                })
        })
        // updates the date every second
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }
    // instead of updating a state, useEffect monitors states and runs a piece of code if a state updates.
    useEffect(() => {
        updateClockInfo();
        // waits for fetch to complete before doing stuff


    }, []);



return (
        <body>

        <div className={"clockClass"}>
            <MyClock {...timeZones[0]} date={date} updateClocks={updateClockInfo} isSelected={currentClock === 0}
                     onClick={() => {
                         setCurrentClock(0)
                     }}/>
            <MyClock {...timeZones[1]} date={date} updateClocks={updateClockInfo} isSelected={currentClock === 1}
                     onClick={() => {
                         setCurrentClock(1)
                     }}/>
            <MyClock {...timeZones[2]} date={date} updateClocks={updateClockInfo} isSelected={currentClock === 2}
                     onClick={() => {
                         setCurrentClock(2)
                     }}/>
            <MyClock {...timeZones[3]} date={date} updateClocks={updateClockInfo} isSelected={currentClock === 3}
                     onClick={() => {
                         setCurrentClock(3)
                     }}/>
            <MyClock {...timeZones[4]} date={date} updateClocks={updateClockInfo} isSelected={currentClock === 4}
                     onClick={() => {
                         setCurrentClock(4)
                     }}/>
        </div>

        <div className={"globeName"}>
            <h1 id={"englishlogo"}>Aishwarya <br/> Gowri</h1>
            <div className={"globeClass"}>
                <ReactGlobe
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    showGlobe
                    backgroundColor={"black"}
                    showAtmosphere
                    atmosphereAltitude={0.1}
                    atmosphereColor={"lightblue"}
                    onGlobeClick={setTimeZone}
                    width={600}
                    height={600}
                />
            </div>
            <h1 id={"tamillogo"}>ஐஸ்வர்யா கௌரி</h1>


        </div>

        <div className={"links"}>
            <a href="MUSIC.html">
                <h2 id="Video">Video</h2></a>
            <a href="BLOG.html">
                <h2 id="Me">Me</h2></a>
            <a href="PROJECTS.html">
                <h2 id="Projects">Projects</h2></a>
        </div>
        </body>
    );
}

export default App;


