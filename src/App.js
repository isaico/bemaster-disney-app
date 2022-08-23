import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { ContentCategory } from './components/contentCategory/ContentCategory.jsx';
import './App.css';
import { ContentDetails } from './components/contentDetails/ContentDetails.jsx';
// import MoviesContextProvider from './context/MoviesContext.js';
import { Login } from './components/Login/Login.jsx';

function App() {
    return (
        <>
            <div>Hola desde app</div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route
                        exact
                        path="/home/:urlCategory"
                        element={<ContentCategory />}
                    />
                    <Route
                        exact
                        path="/home/:urlCategory/detail/:urlIdItem"
                        element={<ContentDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
