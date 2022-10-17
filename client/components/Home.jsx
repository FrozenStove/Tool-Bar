import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const Home = () => {

    return (
        <ErrorBoundary>
            <div>
                Hello Another World
                <button>boots</button>
            </div>
        </ErrorBoundary>
    )
}

export default Home