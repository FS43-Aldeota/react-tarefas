import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [logado, setLogado] = useState(sessionStorage.getItem("logado"));

    return (
        <LoginContext.Provider value={{ logado, setLogado }}>
            { children }
        </LoginContext.Provider>
    );
}

export default LoginProvider;