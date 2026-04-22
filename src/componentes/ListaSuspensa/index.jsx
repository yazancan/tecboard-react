import './lista-suspensa.estilos.css';

export function ListaSuspensa() {
    return (
        <select className='lista-suspensa-form' >
            <option value="opcao" disabled selected>Selecione uma opção</option>
            <option value="temaIA">IA</option>
            <option value="temaFrontEnd">Front-end</option>
            <option value="temaBackEnd">Back-end</option>
            <option value="temaDevops">Devops</option>
            <option value="temaDataScience">Data Science</option>
            <option value="temaCloud">Cloud</option>
        </select>
    )
}