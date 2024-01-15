import React from "react";
import TimeDisplay from "./Time";

export const Header = () => {
    return (

        <header id="header">

            <div id="date-time-div">
                <div className="margin">
                    <TimeDisplay />
                </div>

            </div>
            <div className="margin">
                <div id="header-logo-div">
                    <img id="aicte-logo" src=".\img\logo_new.png" alt="AICTE logo"></img>
                    <img id="sla-logo" src=".\img\SLALogo.png" alt="SLA logo"></img>
                    <img id="parakh-logo" src=".\img\Parakhlogo.png" alt="Parakh logo"></img>
                </div>
            </div>
        </header>


    )
}