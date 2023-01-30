import "./style.css";
export function TarjetaTarea({estado}) {
    return <div className="card">
        <h1>Mi primera Tarjeta</h1>
        <p style={estado ? {color: "green"}:{color: "brown"}}>
            {estado ? "Tarea realizada" : "Tarea pendiente"}
        </p>
    </div>
}