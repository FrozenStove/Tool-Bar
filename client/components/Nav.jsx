import * as React from 'react'
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
    const nav = useNavigate()

    return (
        <nav>
            <ul>
                <li
                    onClick={()=>nav('/')}
                >
                    Home
                </li>
                <li
                    onClick={()=>nav('/drafting')}
                >
                    Drafting Schedule
                </li>
                <li
                    onClick={()=>nav('/scheduling')}
                >
                    Scheduling
                </li>
            </ul>
        </nav>
    )

}

export default Nav


