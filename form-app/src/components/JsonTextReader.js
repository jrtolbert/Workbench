import React, { useState } from 'react';

// component that accepts a json object that will be probed for questions for a survey


function JsonReaderApp( {callback} ) {
    const [jsonObj, setJsonObj] = useState({});
    const changeHandler = (e) => {
        setJsonObj({...jsonObj, [e.target.id]: e.target.value});
    };
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(jsonObj);
    // };

    return (
        <div className="JsonReaderApp">
            <form>
                <textarea 
                    className="input text-area" 
                    placeholder="Enter JSON blob here:" 
                    value={jsonObj.textAreaValue || ""} 
                    onChange={ changeHandler } 
                    id="textAreaValue"
                    />
                <button type="button" onClick={() => callback(jsonObj.textAreaValue)}>Submit</button>                  
            </form>
        </div>
    );
}

export default JsonReaderApp;