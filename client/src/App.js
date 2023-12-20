// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/landing/landing';
import Login from './components/login/login';
import Chapters from './components/chapters/chapters';
import Blogs from './components/blogs/blogs';
import Opportunities from './components/opportunities/opportunities';
import AnomalyAlert from './components/AnomalyAlert';

function AnomalyDetection() {
    const [anomalyDetected, setAnomalyDetected] = useState(false);

    useEffect(() => {
        // Get the current data
        const data = { /* your data here */ };

        // Make a request to the server
        axios.post('http://localhost:5000/predict', data)
            .then(response => {
                // Check if an anomaly was detected
                if (response.data.anomaly_detected) {
                    setAnomalyDetected(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            {anomalyDetected ? (
                <div style={{ color: 'red', fontSize: '20px' }}>
                    Anomaly Detected! Take necessary actions.
                </div>
            ) : (
                <div style={{ color: 'green', fontSize: '20px' }}>
                    No anomaly detected. All systems normal.
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/chapters' element={<Chapters />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/opportunities' element={<Opportunities />} />
                    <Route path='/anomaly-detection' element={<AnomalyDetection />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
