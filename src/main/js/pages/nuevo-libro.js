const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoLibroPage = () => {

    let { id } = useParams();

    const [generos, setGeneros] = useState([])
    const [idiomas, setIdiomas] = useState([])

    const [idGenero, setIdGenero] = useState('')
    const [idIdioma, setIdioma] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/libros',
            entity: {
                editorial: 'http://localhost:8080/api/editoriales/'+id,
                genero: 'http://localhost:8080/api/generos/'+idGenero,
                idioma: 'http://localhost:8080/api/idiomas/'+idIdioma},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/generos'
        }).done(response=>{
            setGeneros(response.entity._embedded.generos)
        })
        client({
            method: 'GET',
            path: '/api/idiomas'
        }).done(response=>{
            setIdiomas(response.entity._embedded.idiomas)
        })

    },[])

    return (
        <>
            <h1>Nuevo Libro</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='genero'>Genero </label>
                <select name="genero" id="genero" onChange={(e)=>{setIdGenero(e.target.value)}}>
                    {generos.map(genero => {	
                        const value = genero._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{genero.nombre}]</option>
                        )
                    })}
                </select><br />

                <label>Idioma </label>
                <select name="idioma" id="idioma" onChange={(e)=>{setIdioma(e.target.value)}}>
                    {idiomas.map(idioma => {	
                        const value = idioma._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({idioma.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Libro" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoLibroPage;