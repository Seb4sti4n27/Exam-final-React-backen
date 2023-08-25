const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoIdiomaPage = () => {

    const [nombre, setNombre] = useState('')
    const [estado, setEstado] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/idiomas',
            entity: {nombre: nombre, estado: estado, descripcion: descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Idioma</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <label>Estado</label> <br />
            <input type="text" id='estado' name='estado' onChange={e=>setEstado(e.target.value)} /> <br />
            <label>Descripción</label> <br />
            <input type="text" id='descripcion' name='descripcion' onChange={e=>setDescripcion(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Idioma" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoIdiomaPage;