import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { ContentCategory } from './components/contentCategory/ContentCategory.jsx';
import './App.css';
import { ContentDetails } from './components/contentDetails/ContentDetails.jsx';

import { Login } from './components/Login/Login.jsx';
import { AuthContextProvider } from './context/AuthContext.js';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
function App() {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login />} />

                        <Route exact path="/home" element={<PrivateRoute />}>
                            <Route exact path="/home" element={<Home />} />
                        </Route>

                        {/*  */}
                        <Route
                            exact
                            path="/home/:urlCategory"
                            element={<PrivateRoute />}
                        >
                            <Route
                                exact
                                path="/home/:urlCategory"
                                element={<ContentCategory />}
                            />
                        </Route>
                        <Route
                            exact
                            path="/home/:urlCategory/detail/:urlIdItem"
                            element={<PrivateRoute />}
                        >
                            <Route
                                exact
                                path="/home/:urlCategory/detail/:urlIdItem"
                                element={<ContentDetails />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}

export default App;
