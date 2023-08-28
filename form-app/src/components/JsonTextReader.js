import React, { useState } from 'react';

// component that accepts a json object that will be probed for questions for a survey


function JsonReaderApp( {callback} ) {
    const [jsonObj, setJsonObj] = useState({});
    const changeHandler = (e) => {
        setJsonObj({...jsonObj, [e.target.id]: e.target.value});
    };
    const suggestion = '{"elements": [{"name": "FirstName", "title": "Enter your first name:", "type": "text"}]}';

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
            </form>
            <button type="button" onClick={() => callback(jsonObj.textAreaValue)}>Submit</button>     
            <footer>
                <span>
                <p>Note: The textarea accepts a json string that is written across a single line.</p>
                <p>To format your json string and create a survey that will be displayed in the Question Viewport tab, enter your json string into the Json Reader textarea and press enter.</p>
                To view more information on crafting a json string, please view the following link:
                <a href="https://surveyjs.io/form-library/documentation/design-survey/create-a-simple-survey"> SurveyJs</a>
                <p>Try this to start: { suggestion }</p>
                </span>
            </footer>             
        </div>
    );
}

export default JsonReaderApp;