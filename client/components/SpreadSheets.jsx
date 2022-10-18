import React from 'react'

const SpreadSheets = (props) => {
    const title = props.title;
    const data = props.data;

    const buttonArray = [];
    for (const [key, value] of Object.entries(data)) {
        if (key === 'title') {
            let ob = {
                // a
            }
        } else {

            buttonArray.push(
                <button key={key}>{key}</button>
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