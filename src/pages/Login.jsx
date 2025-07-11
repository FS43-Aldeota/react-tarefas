import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";

const Login = () => {

    const emailInput = useRef();
    const senhaInput = useRef();
    const { setLogado } = useContext(LoginContext);
    const navigate = useNavigate();

    function logar(event) {
        event.preventDefault();

        let dados = {
            email: emailInput.current.value,
            senha: senhaInput.current.value
        }

        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dados)
        })
            .then(res => res.json())
            .then(resposta => {
                console.log(resposta);
                sessionStorage.setItem("logado", true);
                sessionStorage.setItem("usuario_id", resposta.usuario.id);
                sessionStorage.setItem("usuario_nome", resposta.usuario.nome);
                setLogado(true);
                navigate("/");
            })
    }

    return (
        <div className="h-screen flex justify-center items-center bg-slate-100">
            <form
                className="w-[350px] p-4 rounded-lg bg-white"
                onSubmit={logar}
            >
                <h3 className="text-lg text-slate-500 font-bold mb-8">Seja bem-vindo</h3>
                <label className="block text-slate-700 font-bold mb-1">Email</label>
                <input
                    ref={emailInput}
                    type="text"
                    placeholder="Digite seu email"
                    className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4"
                />
                <label className="block text-slate-700 font-bold mb-1">Senha</label>
                <input
                    ref={senhaInput}
                    type="password"
                    placeholder="********"
                    className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4"
                />
                <button className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold w-full">Entrar</button>
            </form>
        </div>
    );
}

export default Login;