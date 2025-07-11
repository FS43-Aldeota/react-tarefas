import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Tarefa = ({id, titulo, descricao, recarregar }) => {

    const { logado } = useContext(LoginContext);

    function deletar(){
        fetch(`http://localhost:8000/tarefas/${id}`, {
            method:"delete"
        })
        .then(res => res.json())
        .then(resposta => {
            alert(resposta)
            recarregar();
        })
    }

    return (
        <div className="p-4 border border-slate-200 rounded-md">
            <h6 className="text-xl text-slate-500 font-bold mb-4">{titulo}</h6>
            <p className="text-sm">{descricao}</p>
            {
                logado && (
                    <div className="flex gap-3 mt-6">
                        <button className="border border-slate-300 px-2 py-1 rounded text-slate-500 hover:bg-slate-500 hover:text-white duration-150">Editar</button>
                        <button
                            onClick={deletar}
                            className="border border-slate-300 px-2 py-1 rounded text-slate-500 hover:bg-slate-500 hover:text-white duration-150"
                        >
                            Deletar
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Tarefa;