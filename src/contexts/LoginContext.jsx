import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [logado, setLogado] = useState(false);

    return (
        <LoginContext.Provider value={{ logado, setLogado }}>
            { children }
        </LoginContext.Provider>
    );
}

export default LoginProvider;