import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Tarefa = () => {

    const { logado } = useContext(LoginContext);

    return (
        <div className="p-4 border border-slate-200 rounded-md">
            <h6 className="text-xl text-slate-500 font-bold mb-4">Titulo da Tarefa</h6>
            <p className="text-sm">texto da tarefa</p>
            {
                logado && (
                    <div className="flex gap-3 mt-6">
                        <button className="border border-slate-300 px-2 py-1 rounded text-slate-500 hover:bg-slate-500 hover:text-white duration-150">Editar</button>
                        <button className="border border-slate-300 px-2 py-1 rounded text-slate-500 hover:bg-slate-500 hover:text-white duration-150">Deletar</button>
                    </div>
                )
            }
        </div>
    );
}

export default Tarefa;