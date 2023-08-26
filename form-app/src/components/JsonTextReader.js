//import React, { useState } from 'react';

// component that accepts a json object that will be probed for questions for a survey


function JsonReaderApp() {
    //const [jsonObj, setJsonObj] = useState();
    return (
        <div className="JsonReaderApp">
            <form>
                <input name="json-input" placeholder="Enter your JSON blob here: " />
            </form>
        </div>
    );
}

export default JsonReaderApp;