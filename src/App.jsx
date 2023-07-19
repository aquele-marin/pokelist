import Home from "./components/pages/home/index";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth";
import ScrollToTop from "./utils/ScrollToTop";
import { CssBaseline } from "@mui/material";
import Login from "./components/pages/login/";
import Landing from "./components/pages/landing/";

function PrivateRoute({ children, path, exact = false, ...rest }) {
    // const { refreshToken } = useAuth();
    const refreshToken = "Bearer Ad3rrfbvf3efgvrfr3rvfevre";

    return (
        <Route
            {...rest}
            exact={exact}
            path={path}
            render={({ location }) => {
                return refreshToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                from: location,
                            },
                        }}
                    />
                );
            }}
        />
    );
}

function App() {
    return (
        <ProvideAuth>
            <BrowserRouter>
                <ScrollToTop />
                <CssBaseline />
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/landing">
                        <Landing />
                    </Route>
                    <PrivateRoute exact path="/">
                        <Home />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </ProvideAuth>
    );
}

export default App;
