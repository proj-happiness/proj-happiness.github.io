import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ProcessResult from '../utils/ProcessResult';

function Process({ testAnswers, basicInfo, setResult }) {

    const navigate = useNavigate();
    const [processing, setIsProcessing] = useState(true);
    useEffect(() => {
        if(!basicInfo || testAnswers.length !== 10){
            navigate('/');
        }

        const result = new ProcessResult(testAnswers);
        setTimeout(() => {
            setResult(result);
            setIsProcessing(false);
        }, 2000);
    },[]);

    useEffect(() => {
        if(!processing){
            navigate('/results', {
                state: {
                    status: 'processed'
                }
            });
        }
    }, [processing])

    return (
        <pre>Processing...</pre>
    )
}

export default Process
