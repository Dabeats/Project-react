import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"; 
import {Hola,Tarjeta} from "./Hola"
import { Button } from "./Button";
import { TarjetaTarea } from "./Tarjeta";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById('root'))

const handleChange = (e) => {
    console.log(e.target.value);
}

/* const usuarios =[
    {
        id :1,
        name :"David",
        imagen:'https://robohash.org/1'
    },
    {
        id :2,
        name :"Pato",
        imagen:'https://robohash.org/2'
    }
] */

function Contador() {
    
    const [mensaje, setMensaje] = useState('')

    useEffect( () => {
        console.log('render');
    },[])

    return <div>
        <input onChange={(e) =>{
            setMensaje(e.target.value)
        }}/>
        <button onClick={() => {
            alert('el mensaje es '+ mensaje)
        }}>
            guardar
        </button>
    </div>
}

root.render(<>

    <Contador/>

    {/* {usuarios.map((usuario,i)=>{
        return <div key={i}>
        <h1>{usuario.name}</h1>
        <img src={usuario.imagen}/>
        <h3>{usuario.id}</h3>
        </div>
    })} */}


    {/* <TarjetaTarea estado = {true}/>
     <Button text = "presiona" name ="David"/>
    <input id="hola" onChange={handleChange}/>  */}

     {/* <Tarjeta 
        name= "Moto fz" 
        monto ={300000} 
        estado ={true} 
        lugar = {{ciudad : "calarca", pais:"colombia"}}
    /> */}
    
</>)