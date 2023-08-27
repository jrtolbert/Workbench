import { useState, useEffect } from "react";

function QuestionViewport({text}) {
    const [result, setResult] = useState('');
    
    useEffect(() => {
        setResult(JSON.stringify({text}));
    }, {text});
    
    console.log(result);
    return(
        <div>
            <span> { text } </span>
             
        </div>
    );
}

export default QuestionViewport;