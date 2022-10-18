import * as React from 'react'
import { useNavigate } from "react-router-dom";

const Lower = (props) => {
const nav = useNavigate()

    return (
        <>
            <div className="lower">
                <button>Drafting Request</button>
            </div>
            <div className="lower">
                <button>Drafting Request</button>
            </div>
            <div className="lower">
                <button onClick={() => nav("/schedule")}>1Drafting Request</button>
            </div>
            <div className="lower">
                <button>Drafting Request</button>
                <button onClick={() => nav("/")}>Navigate home Request</button>
            </div>
            <div className="lower">
                <button onClick={() => nav("/schedule")}>Navigate Drafting Request</button>
            </div>
        </>

    )

}

export default Lower