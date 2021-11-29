import { useState } from 'react';
import { Routes, Route } from 'react-router';
import BasicInformation from './pages/BasicInformation';
import Home from './pages/Home';
import Process from './pages/Process';
import Result from './pages/Result';
import Test from './pages/Test';

function App() {

    const [testAnswers, setTestAnswers] = useState([]);
    const [ basicInformation, setBasicInformation ] = useState({});
    const [ result, setResult ] = useState({});
    const [ formData, setFormData ] = useState({});
    return (    
        <div className="container flex justify-center items-start w-full h-screen">
            {/* <Test testAnswers={testAnswers} setTestAnswers={setTestAnswers} /> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/test" element={<Test testAnswers={testAnswers} setTestAnswers={setTestAnswers} setFormData={setFormData}/>} />
                <Route path="/lastStep" element={<BasicInformation testAnswers={testAnswers} setBasicInfo={setBasicInformation}/>} />
                <Route path="/process" element={<Process testAnswers={testAnswers} basicInfo={basicInformation} setResult={setResult}/>} />
                <Route path="/results" element={<Result testAnswers={testAnswers} result={result} basicInfo={basicInformation} formData={formData}/>} />
            </Routes>
        </div>
    )   
}

export default App
