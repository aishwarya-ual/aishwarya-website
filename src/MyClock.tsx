import Clock from "react-clock";
import React, {useEffect, useState} from "react";
import {deleteClock, editClock, saveClock} from "./libs/ClockAPI";
import app, {ClockInfo} from "./App";
import {Simulate} from "react-dom/test-utils";

export default function MyClock({
                                    timezone,
                                    address,
                                    date,
                                    id,
                                    lat,
                                    long,
                                    onClick,
                                    updateClocks,
                                    isSelected
                                }: ClockInfo & {
    date: Date,
    onClick: () => void
    updateClocks: () => void
    isSelected: boolean
}): JSX.Element {


    useEffect(() => {
        console.log(date.toLocaleString("en-GB", {timeZone: timezone}));
    }, [timezone])


    const handleSave = () => {
        console.log("handlingSave");
        //if id is not null, edit
        if (id == null) {
            console.log("handleSaveNoID")
            saveClock({lat, long, timezone, address}).then(response => {
                updateClocks();


            })
        } else {
            editClock({lat, long}, id).then(response => {
                updateClocks();

            })
        }
    }

    const handleDelete = () => {
        if (id != null) {
            deleteClock(id).then(response => {
                //refreshes
                updateClocks();
            })
        }
    }

    return (
        <div id={id} className={"clocky"} >
            <br/>
            <div className={"dateTime" } onClick={onClick}>
                <div className={ isSelected ? "flickering" : ""}>
                    <div className={"country"}>
                        {address}
                    </div>
                {date.toLocaleString("en-GB", {timeZone: timezone}).split(",")[0]}
                    <br/>
                {date.toLocaleString("en-GB", {timeZone: timezone}).split(",")[1]}
                </div>
            </div>
            <br/>
            <button className={"buttons"} onClick={handleSave}>SAVE</button>
            <button className={"deleteButton"} onClick={handleDelete}>DELETE</button>
        </div>
    )


}
