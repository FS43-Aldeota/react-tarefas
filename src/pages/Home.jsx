import { useContext, useEffect, useRef, useState } from "react";
import Tarefa from "../components/Tarefa";
import { LoginContext } from "../contexts/LoginContext";

const Home = () => {

    const { logado, setLogado } = useContext(LoginContext);
    const [gaveta, setGaveta] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    const tituloRef = useRef();
    const descricaoRef = useRef();

    function logout() {
        sessionStorage.clear();
        setLogado(false);
    }

    function buscarTarefas(){
        const usuario_id = sessionStorage.getItem("usuario_id");
        if(usuario_id){
            fetch(`http://localhost:8000/tarefas-do-usuario/${usuario_id}`)
            .then(res => res.json())
            .then(resposta => {
                console.log(resposta);
            })
        }
    }

    function criarTarefa() {
        event.preventDefault();
        let tarefa = {
            titulo: tituloRef.current.value,
            descricao: descricaoRef.current.value
        }
        alert(JSON.stringify(tarefa));
    }

    useEffect(() => {
        buscarTarefas();
    }, []);

    return (
        <div>
            <header className="bg-slate-600 flex justify-between items-center py-4 px-[100px]">
                <h1 className="text-white text-2xl">React Tarefas</h1>
                {
                    logado ? (
                        <button
                            className="leading-[46px] bg-white px-4 rounded font-semibold"
                            onClick={logout}
                        >
                            log out
                        </button>
                    ) : (
                        <a href="/login" className="leading-[46px] bg-white px-4 rounded font-semibold">Login</a>
                    )
                }
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-[100px]">
                <Tarefa />
                <Tarefa />
                <Tarefa />
                <Tarefa />
            </div>
            {
                logado && (
                    <div className="fixed bottom-8 right-8">
                        <button onClick={() => setGaveta(true)} className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold">Nova Tarefa</button>
                    </div>
                )
            }
            <div className={`w-full h-screen fixed top-0 left-0 z-10 duration-200 ${gaveta == false && 'opacity-0 invisible'}`}>
                <div onClick={() => setGaveta(false)} className="w-full h-full absolute top-0 left-0 bg-black/90"></div>
                <div className={`w-[350px] h-full bg-white absolute top-0 duration-200 delay-200 p-4 ${gaveta == false ? '-right-[350px]' : 'right-0'}`}>
                    <h3 className="text-xl font-semibold mb-3">Cadastrar</h3>
                    <form onSubmit={criarTarefa}>
                        <label className="block mb-1">Titulo</label>
                        <input
                            ref={tituloRef}
                            type="text"
                            className="w-full h-[40px] mb-4 px-3 border border-slate-300 focus:outline-slate-500"
                        />
                        <label className="block mb-1">Descrição</label>
                        <textarea
                            ref={descricaoRef}
                            className="w-full h-[120px] mb-4 px-3 border border-slate-300 focus:outline-slate-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold"
                        >
                            Criar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;