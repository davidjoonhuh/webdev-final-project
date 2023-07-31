import HelloWorld from './web-dev-project/hello-world';
import SearchPage from './web-dev-project/search';
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
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
