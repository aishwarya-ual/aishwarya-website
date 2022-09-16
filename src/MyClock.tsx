import Clock from "react-clock";
import React, {useEffect} from "react";

export default function MyClock({timezone, address, date, onClick}: {timezone: string, address: string, date: Date, onClick: ()=>void}){

    useEffect(() => {
        console.log(date.toLocaleString("en-GB", {timeZone: timezone}));
    }, [timezone])

    return (
        <div style={{color:"white", fontSize:15}} className={"clock1"} onClick={onClick}>
            {/*<Clock value={date.toLocaleString("en-GB", {timeZone: timezone})} size={120}/>*/}
            {date.toLocaleString("en-GB", {timeZone: timezone})}
            <br/>
            {address}
        </div>
    )
}