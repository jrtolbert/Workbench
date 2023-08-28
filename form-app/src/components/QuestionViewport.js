import 'survey-core/defaultV2.min.css';
import Alert from 'react-bootstrap/Alert';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

function QuestionViewport({text}) {
    console.log('Preparing survey');
    try {
        const surveyJson = JSON.parse(text);
        var survey = new Model(surveyJson);
    } catch(error) {
        console.error("Invalid or empty JSON string: ", text);
        //<Alert key="primary" variant="primary">Invalid or empty JSON string: { text }</Alert>
    }
    
    console.log(text);

    if(survey) {
        return(<Survey model = {survey} />);
    } else {
        var survey = new Model('');
        return (<Survey model = {survey} />);
    }
}

export default QuestionViewport;