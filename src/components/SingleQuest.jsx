import { arrowdown, arrowup } from "../helper/icons";
import React, { useState } from 'react';


const SingleQuest = ({id, question, answer}) => {
    const [show, setShow] = useState(false);

    return (
<div className="cont">
    <div className="question">
        <h3>{id}.{question}</h3>
        <span 
        className="iconSpan"  role="button" 
        onClick={() => setShow(!show)}>
            {show ? arrowup : arrowdown}
        </span>
    </div>
    <div className="answer">{show && answer}</div>


</div>
    )}

    export default SingleQuest
