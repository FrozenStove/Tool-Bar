import * as React from 'react'
import { useNavigate } from "react-router-dom";

const Lower = (props) => {
const nav = useNavigate()

    return (
        <>
            <div className="lower">
                <button>Specification<br/>Editing<br/>Request</button>
            </div>
            <div className="lower">
                <button className='light-button'>DESIGN GUIDES</button>
                <button className='light-button'>VIDEO LIBRARY</button>
                <button>New Hire Reference Guide</button>
            </div>
            <div className="lower">
                <button>CAD/REVIT <br/> STANDARDS</button>
            </div>
            <div className="lower">
                {/* <button onClick={() => nav("/schedule")}>1Drafting Request</button> */}
                <button>Typical Details</button>
                <button>General Notes</button>
            </div>
            <div className="lower">
                {/* <button onClick={() => nav("/schedule")}>1Drafting Request</button> */}
                <button>Job # Request</button>
                <button>Marketing Request</button>
            </div>
            <div className="lower">
                <button>Drafting Request</button>
                <button>Licensing Request</button>
                {/* <button onClick={() => nav("/")}>Navigate home Request</button> */}
            </div>
            <div className="lower">
                {/* <button onClick={() => nav("/schedule")}>Navigate Drafting Request</button> */}
                <button>Proposal Templates</button>
                <button>Employee Links</button>
            </div>
        </>

    )

}

export default Lower