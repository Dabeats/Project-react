import { VscCallOutgoing } from "react-icons/vsc";

export function Post() {
    return <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error =>console.log(error))
    }}>
        <VscCallOutgoing/>
        Traer Datos
    </button>
}