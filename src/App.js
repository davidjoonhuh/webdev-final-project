import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Youboxd from './web-dev-project';
import SearchPage from './web-dev-project/search';
import AdminProfileScreen from './web-dev-project/profile-screen/admin-profile-screen';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/youboxd" />} />
                    <Route path="/youboxd/*" element={<Youboxd />} />
                    <Route path="/admin/*" element={<AdminProfileScreen />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
