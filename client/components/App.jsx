import React from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Shortcuts from './shortcuts/Shortcuts'
import ErrorBoundary from './ErrorBoundary'
import Nav from './Nav';
import SpreadSheets from './shortcuts/SpreadSheets'
import Lower from './Lower';
import Scheduling from './scheduling/Scheduling';


const App = () => {
    const [username, setUsername] = useState('Please Log In');


    return (
        <ErrorBoundary>
            <HashRouter basename="/">
                <Nav />
                <div id='content'>
                    <Routes>
                        <Route
                            path="/"
                            element={<Shortcuts />}
                        />
                        <Route
                            path="/scheduling"
                            element={<Scheduling />}
                        />
                        <Route
                            path="/drafting"
                            element={<p>Drafting</p>}
                        />
                    </Routes>
                </div>
                <footer className='utilities'>
                    <Lower />
                </footer>
            </HashRouter>
        </ErrorBoundary>
    )
}

export default App