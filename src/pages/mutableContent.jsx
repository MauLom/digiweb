import * as React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom";

import Home from "./home";
import News from "./News";
const MutableContent = () => {

    return (
        <div style={{height:"100vh"}}> 
            <Router>
                <Routes >
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                    <Route path='/' element={<Home />} />
                    <Route path="/news" element={<News />} />
                    
                </Routes >
            </Router>

        </ div>
    )
}

export default MutableContent