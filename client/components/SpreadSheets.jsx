import React from 'react'

var count = 1;
const SpreadSheets = (props) => {
    const title = props.title;
    const data = props.data;

    const buttonArray = [];

    // function readSingleFile(e) {
    //     var file = e.target.files[0];
    //     if (!file) {
    //         return;
    //     }
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //         var contents = e.target.result;
    //         displayContents(contents);
    //     };
    //     reader.readAsText(file);
    // }

    for (const [key, value] of Object.entries(data)) {
        // console.log(typeof value)
        if (key === 'title') {
            let ob = {
                // a
            }
        } else {
            buttonArray.push(
                    <button onClick={async (e) => {
                        // e.preventDefault
                        await window.api.openFile(value)
                    }} key={key}>{key}</button>
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