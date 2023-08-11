import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Login } from "./components/pages/login";
import { Landing } from "./components/pages/landing";
import { Main } from "./components/pages/main";
import { Profile } from "./components/pages/profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import { Footer } from "./components/atoms/Footer";
import { Header } from "./components/atoms/Header";
import { Pokedex } from "./components/pages/pokedex";

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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
}); // 12 hours of cached data

function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <Box className="h-full">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                </Routes>
                <Footer />
            </Box>
        </QueryClientProvider>
    );
}

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
