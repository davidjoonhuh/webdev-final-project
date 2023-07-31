import HelloWorld from './web-dev-project/hello-world';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/hello" />} />
                    <Route path="/hello" element={<HelloWorld />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
