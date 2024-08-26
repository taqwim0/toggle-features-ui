import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import FeatureToggleManagement from './pages/FeatureToggleManagement';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/feature-toggles" element={<FeatureToggleManagement/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
