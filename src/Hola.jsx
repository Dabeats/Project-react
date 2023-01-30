export function Hola({title,name="user"}) {
    return <h1>{title}, dice {name}</h1>
}
export function Tarjeta(x) {
    console.log(x);
    return <div>
        <h1>Nombre: {x.name}</h1>
        <p>Monto: {x.monto}</p>
        <p>Estado: {x.estado ? 'disponible':'vendida'}</p>
        <ul>
            <li>Ciudad: {x.lugar.ciudad}</li>
            <li>Pais: {x.lugar.pais}</li>
        </ul>
        
    </div>
}