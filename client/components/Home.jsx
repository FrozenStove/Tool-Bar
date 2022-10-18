import React from 'react'
// import ErrorBoundary from './ErrorBoundary'
import SpreadSheets from './SpreadSheets'

const Home = () => {

    const columns = [];
    const spreadSheetData = [
        {
            title: 'Analysis',
            "Seismic Base Shear (ASCE 7-16)": "/Users/lennysutrisno/Documents/GitHub/Tool-Bar/Codesmith Alumni Directory.xlsx",
            "Seismic Base Shear (ASCE 7-10)": "/Users/lennysutrisno/Documents/GitHub/Tool-Bar/test.txt",
            "Fp Force (ASCE 7-16)": "./",
            "Fp Force (ASCE 7-10)": "./",
            "Pole Footing (CBC 2022)": "./",
        },
        {
            title: 'Concrete',
            "Seismic Base Shear 2 (ASCE 7-16)": "./"
        },
        {
            title: 'Steel',
            "WF Drag Conn (AISC 360-16)": "./"
        },
        {
            title: 'Masonry',
            "Shear Wall Design": "./"
        },
        {
            title: 'Wood',
            "Seismic Base Shear 5 (ASCE 7-16)": "./"
        },
        {
            title: 'Miscellaneous',
            "Seismic Base Shear 6 (ASCE 7-16)": "./"
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
                <button>"Hello, World,<br></br>and all you beautiful people in it!"</button>

            </footer>
        </>
    )
}

export default Home