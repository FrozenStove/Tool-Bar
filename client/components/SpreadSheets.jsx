import React from 'react'

const SpreadSheets = (props) => {
    const title = props.title;
    const data = props.data;

    const buttonArray = [];

    for (const [key, value] of Object.entries(data)) {
        // console.log(typeof value)
        const disabled = key === 'Shear Wall Design'
        if (key !== 'title') {
            buttonArray.push(
                <button onClick={(e) => {
                    e.preventDefault
                    window.api.openFile(value)
                }}
                    disabled={disabled}
                    key={key}>
                    {key}
                </button>
            )
        }
    }

    return (
        <div className="sheetcolumn">
            <h1>{title}</h1>
            {buttonArray}
        </div>
    )

}

export default SpreadSheets