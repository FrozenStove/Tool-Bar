import React from 'react'
// import ErrorBoundary from './ErrorBoundary'
import SpreadSheets from './SpreadSheets'

const Home = () => {

    const columns = [];
    const spreadSheetData = [
        {
            title: 'Analysis',
            "Seismic Base Shear 1\n (ASCE 7-16)": "./",
            "Seismic Base Shear 2\n (ASCE 7-16)": "./"
        },
        {
            title: 'Concrete',
            "Seismic Base Shear 2\n (ASCE 7-16)": "./"
        },
        {
            title: 'Steel',
            "Seismic Base Shear 3\n (ASCE 7-16)": "./"
        },
        {
            title: 'Masonry',
            "Seismic Base Shear 4\n (ASCE 7-16)": "./"
        },
        {
            title: 'Wood',
            "Seismic Base Shear 5\n (ASCE 7-16)": "./"
        },
        {
            title: 'Miscellaneous',
            "Seismic Base Shear 6\n (ASCE 7-16)": "./"
        },
    ];

    for ( let section of spreadSheetData){
        columns.push(<SpreadSheets title={section.title} data={section} key={section.title} />)
    }


    return (
        <>
            <div id='upperhalf'>
                {columns}
            </div>
            <footer className='utilities'>
                <button>"Hello, World,<br></br>\nand all you beautiful people in it!"</button>

            </footer>
        </>
    )
}

export default Home