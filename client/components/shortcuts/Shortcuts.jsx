import React from 'react'
import SpreadSheets from './SpreadSheets'

const Shortcuts = () => {

    const columns = [];
    const spreadSheetData = [
        {
            title: 'Analysis',
            "Seismic Base Shear (ASCE 7-16)": "/Users/lennysutrisno/Documents/GitHub/Tool-Bar/Codesmith Alumni Directory.xlsx",
            "Seismic Base Shear (ASCE 7-10)": "/Users/lennysutrisno/Documents/GitHub/Tool-Bar/test.txt",
            "Fp Force (ASCE 7-16)": "./",
            "Fp Force (ASCE 7-10)": "./",
            "Pole Footing (CBC 2022)": "./",
            "Pole Footing (CBC 2019)": "./",
            "Pole Footing (CBC 2013)": "./",
            "Diaphragm Force Level (ASCE 7-10)": "./",
            "Diaphragm Force Level (ASCE 7-16)": "./",
            "Drag Analysis (ASCE 7-10)": "./",
            "Show Tables (ASCE 7-16)": "./",
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
            "Wall Mounted Anchorage": "./",
            "DG 11 Vibration v2.1": "./",
            "Wall and Wall-Floor Mounted Anchorage (ASCE 7-16)": "./",
        },
    ];

    for (let section of spreadSheetData) {
        columns.push(<SpreadSheets title={section.title} data={section} key={section.title} />)
    }


    return (
        <div id='main-tools'>
            {columns}
        </div>

    )
}

export default Shortcuts