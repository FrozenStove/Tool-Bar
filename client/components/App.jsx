import React from 'react'
import Home from './home/Home'
import ErrorBoundary from './ErrorBoundary'

const App = () => {
    return (
        <ErrorBoundary>
            <Home />
        </ErrorBoundary>
    )
}

export default App