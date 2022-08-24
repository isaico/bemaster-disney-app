import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { ContentCategory } from './components/contentCategory/ContentCategory.jsx';
import './App.css';
import { ContentDetails } from './components/contentDetails/ContentDetails.jsx';
// import MoviesContextProvider from './context/MoviesContext.js';
import { Login } from './components/Login/Login.jsx';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext.js';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
function App() {
    // const { user } = useContext(AuthContext);
    return (
        <>
            <div>Hola desde app</div>

            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        {/* <PrivateRoute path="/home" element={<Home />} /> */}

                        <Route
                            exact
                            path="/home"
                            element={<Home />}
                            // element={user ? <Home /> : <Navigate to="/" />}
                        />
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
            </AuthContextProvider>
        </>
    );
}

export default App;
