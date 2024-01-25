

// export makes the variable/function available to other files
export const getTimezone = (coords: {lat: number, lng: number}, event: MouseEvent) : Promise<Response> => {
    console.log(coords);
    // a fetch returns a promise of a response; and we are now returning that promise.
    return fetch("http://localhost:8080/time", {
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
}

export const findAllClocks = () : Promise<Response> => {
    //fetch - fetches from the backend

    return fetch("http://localhost:8080/find", {
            // headers - labels attached to a request, that give you info (here, content type and origin) about said request.
            headers: {
                // type json expected back
                'Content-Type': 'application/json',
                // this is the origin of the request (front end)
                Origin: "http://localhost:3000/"
            },

        }
    )
}

export const saveClock = (clock: {lat: number, long: number, timezone: string, address: string}): Promise<Response> => {
    console.log(clock.lat);
    console.log(clock.long);
    return fetch("http://localhost:8080/create", {
        headers: {
            'Content-Type': 'application/json',
            Origin: "http://localhost:3000/"
        },
        method: "POST",
        body: JSON.stringify( {
            lat: clock.lat,
            long: clock.long,
            address: clock.address,
            timezone: clock.timezone

        })

    })
}

export const editClock = (coords: {lat: number, long: number}, id: string) : Promise<Response> => {
    return fetch("http://localhost:8080/edit/" + id, {
        headers: {
            'Content-Type': 'application/json',
            Origin: "http://localhost:3000/"
        },
        method: "PUT",
        body: JSON.stringify({
            lat: coords.lat,
            long: coords.long
        })
    })
}
export const deleteClock = (id: string) : Promise<Response> => {
    return fetch("http://localhost:8080/delete/" + id, {
        headers: {
            'Content-Type': 'application/json',
            Origin: "http://localhost:3000/"
        },
        method: "DELETE",
    })
}

