import Home from "./components/pages/home/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth";
import { CssBaseline } from "@mui/material";
import Login from "./components/pages/login/";
import Landing from "./components/pages/landing/";

// Deprecated due to react-router-dom upgrade to v6
// function PrivateRoute({ element, path, exact = false, ...rest }) {
//     // const { refreshToken } = useAuth();
//     const refreshToken = "Bearer Ad3rrfbvf3efgvrfr3rvfevre";

//     return (
//         <Route
//             {...rest}
//             exact={exact}
//             path={path}
//             render={({ location }) => {
//                 return refreshToken ? (
//                     children
//                 ) : (
//                     <Navigate to="/login" replace state={{ from: location }} />
//                 );
//             }}
//         />
//     );
// }

function App() {
    return (
        <ProvideAuth>
            <BrowserRouter>
                <CssBaseline />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ProvideAuth>
    );
}

export default App;
