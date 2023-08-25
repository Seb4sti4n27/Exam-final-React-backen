const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerEditorialPage = () => {

    let { id } = useParams();
    const [editorial, setEditorial] = useState({});
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/editoriales/' + id
        }).done(response => setEditorial(response.entity))
        client({
            method: 'GET',
            path: '/api/editoriales/' + id + '/formacion'
        }).done(response => setLibros(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Editorial</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{editorial.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Genero</th>
                        <th>Idioma</th>
                    </tr>
                </thead>
                <tbody>

                    {libros.map(libro => {
                        return (
                            <tr key={libro.ID}>
                                <td>{libro.GENERO}</td>
                                <td>{libro.IDIOMA}</td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
                    
            <hr />
            <Link to={`/ver-editorial/${id}/nuevo-libro`}>Nuevo Libro</Link> |        
            <Link to="/">Volver</Link>
         </>
    )

}

module.exports = VerEditorialPage;