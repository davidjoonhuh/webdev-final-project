import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Youboxd from './web-dev-project';
import SearchPage from './web-dev-project/search';
import store from "./web-dev-project/store"
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/youboxd" />} />
            <Route path="/youboxd/*" element={<Youboxd />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;