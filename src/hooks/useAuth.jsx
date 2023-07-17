import { createContext, useState } from "react";
import axios from "axios";

// const API_URL = process.env.backendURL;
const API_URL = "http://localhost:3333";
const TIMEOUT_LIMIT = 12000;

export const AuthContext = createContext();

function useProvideAuth() {
    // Se logado 'user' possui token, se deslogado 'user' possui o valor 'null'
    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem("RTN-RTKN")
    );
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("RTN-ATKN")
    );

    const signIn = async (email, password) => {
        const response = await api.post("/login", { email, password });

        setRefreshToken(response.data.refresh_token);
        localStorage.setItem(
            "RTKN",
            JSON.stringify(response.data.refresh_token)
        );

        setAccessToken(response.data.access_token);
        localStorage.setItem(
            "ATKN",
            JSON.stringify(response.data.access_token)
        );

        const _response = await api.get("/user/me", {
            headers: {
                Authorization:
                    "Bearer " + response.data.access_token.replaceAll('"', ""),
            },
        });
        localStorage.setItem("FullName", _response.data.fullname);

        return response;
    };

    const signOut = () => {
        setRefreshToken(null);
        setAccessToken("");

        localStorage.clear();
        sessionStorage.clear();

        return window.location.assign("/login");
    };

    function createApiInstance() {
        const instance = axios.create({
            baseURL: API_URL,
            timeout: TIMEOUT_LIMIT,
        });

        let _token = `Bearer ${accessToken}`;
        _token = _token.replaceAll('"', "");

        instance.defaults.headers.common["Authorization"] = _token;

        instance.interceptors.response.use(
            function (response) {
                // Do something with response data
                return response;
            },
            async function (error) {
                const originalRequest = error.config;
                // Do something with response error

                // Filter if error exists and if its 403
                if (
                    error.response &&
                    error.response.status &&
                    error.response.status === 403
                ) {
                    console.log("Testando: ", originalRequest.url);
                    if (
                        // Expired refresh token
                        originalRequest.url ===
                        `${API_URL}/auth/user/authorization`
                    ) {
                        if (localStorage.getItem("RTN-RTKN")) {
                            alert(
                                "Seu login expirou, por favor insira seus dados para entrar novamente!"
                            );
                            signOut();
                        }
                    } else if (!originalRequest._retry) {
                        // Expired access token
                        try {
                            originalRequest._retry = true;
                            const r = await getNewAccessToken();
                            originalRequest.headers.Authorization =
                                "Bearer " + r;
                            return scrinia(originalRequest);
                        } catch (error) {
                            // alert(error.message);
                            console.log(error.message);
                        }
                    }
                }
                return Promise.reject(error);
            }
        );
        return instance;
    }

    const api = createApiInstance();

    async function getNewAccessToken() {
        let _refreshToken = "Bearer " + refreshToken;
        _refreshToken = _refreshToken.replaceAll('"', "");

        const response = await api.get(
            `${process.env.REACT_APP_BACK_ADDR}/auth/user/authorization`,
            {
                headers: {
                    Authorization: _refreshToken,
                },
            }
        );
        setAccessToken(response.data.access_token);
        sessionStorage.setItem(
            "RTN-ATKN",
            JSON.stringify(response.data.access_token)
        );

        return response.data.access_token;
    }

    return {
        accessToken,
        refreshToken,
        signIn,
        signOut,
        api,
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
