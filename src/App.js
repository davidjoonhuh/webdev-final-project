import HelloWorld from './web-dev-project/hello-world';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import LoginPage from './web-dev-project/login';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/hello" />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/login" element={<LoginPage />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
