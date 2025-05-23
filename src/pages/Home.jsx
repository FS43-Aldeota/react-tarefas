import { useContext } from "react";
import Tarefa from "../components/Tarefa";
import { LoginContext } from "../contexts/LoginContext";

const Home = () => {

    const { logado } = useContext(LoginContext);

    return (
        <div>
            <header className="bg-slate-600 flex justify-between items-center py-4 px-[100px]">
                <h1 className="text-white text-2xl">React Tarefas</h1>
                <a href="/login" className="leading-[46px] bg-white px-4 rounded font-semibold">Login</a>
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
                        <button className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold">Nova Tarefa</button>
                    </div>
                )
            }

        </div>
    );
}

export default Home;